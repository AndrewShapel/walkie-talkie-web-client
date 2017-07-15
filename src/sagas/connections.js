import { eventChannel } from 'redux-saga';
import { takeEvery, take, call, put, select, spawn, fork } from 'redux-saga/effects';

import logger from '../logger/logger';
import webSocket from '../websocket/websocket';
import RTC from '../utils/rtc';
import Token from '../utils/token';

import { CONNECTIONS_ACTION_TYPES, CONNECTIONS_READY_STATES } from '../constants/connections';

import {
  OFFER_CHAT, OFFER_CHATS, JOIN_CHAT, JOIN_CHATS, SEND_MESSAGE, OPEN, CLOSE, SIGN_IN,
  offerChat, joinChat, joinChats, addPeerConnection, addCandidate, setDataChannel,
} from '../action-types/connections';
import { addMessage } from '../action-types/chats';

/**
 * @param {Object} dataChannel
 * @returns {Object}
 */
function getMessage(dataChannel) {
  return eventChannel((emit) => {
    /* eslint-disable no-param-reassign */
    dataChannel.onmessage = (event) => {
      const message = event.data;
      if (message) {
        emit(message);
      }
    };
    /* eslint-enable no-param-reassign */

    return () => {
      /* eslint-disable no-param-reassign */
      dataChannel.onmessage = null;
      /* eslint-enable no-param-reassign */
    };
  });
}

/**
 * @param {String} chatId
 * @param {Object} dataChannel
 * @returns {Object}
 */
function* watchDataChannelMessages(chatId, dataChannel) {
  const dataChannelMessage = yield call(getMessage, dataChannel);
  while (dataChannelMessage) {
    const data = yield take(dataChannelMessage);
    if (data) {
      const parsedData = JSON.parse(data);
      const { message, senderEmail } = parsedData;

      yield put(addMessage(chatId, message, new Date(), senderEmail));
    }
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchOfferChat(action) {
  const { chatId } = action.payload;
  const { Connections } = yield select();

  const token = Token.getToken();

  const peer = Connections.getPeerByChatId(chatId);
  if (peer) {
    const peerConnection = peer.getConnection();
    const dataChannel = peerConnection.createDataChannel(chatId, {
      reliable: true,
    });

    peerConnection.createOffer((offer) => {
      peerConnection.setLocalDescription(offer, () => {
        try {
          const data = JSON.stringify({
            type: CONNECTIONS_ACTION_TYPES.OFFER,
            offer,
            chatId,
            token,
          });

          webSocket.send(data);
        } catch (exception) {
          logger.error(exception);
        }
      }, (error) => {
        logger.error(error);
      });
    }, (error) => {
      logger.error(error);
    });

    yield put(setDataChannel(chatId, dataChannel));
    yield spawn(watchDataChannelMessages, chatId, dataChannel);
  }
}

/**
 * @returns {Object}
 */
export function* fetchOfferChats() {
  const { Chats } = yield select();

  const chats = Chats.getChats();
  const chatsIds = chats.map(chat => chat.getId()).toArray();

  /* eslint-disable no-restricted-syntax */
  for (const chatId of chatsIds) {
    const newAction = offerChat(chatId);
    yield call(fetchOfferChat, newAction);
  }
  /* eslint-enable no-restricted-syntax */
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function fetchCandidate(action) {
  const { chatId, candidate } = action;

  const token = Token.getToken();
  try {
    const data = JSON.stringify({
      type: CONNECTIONS_ACTION_TYPES.CANDIDATE,
      chatId,
      ice: candidate,
      token,
    });

    webSocket.send(data);
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @param {Object} information
 * @param {Object} peer
 */
function handleOffer(information, peer) {
  const { chatId, offer } = information;

  if (peer) {
    const token = Token.getToken();

    const SessionDescription = RTC.getSessionDescription();
    peer.setRemoteDescription(new SessionDescription(offer), () => {
      peer.createAnswer((answer) => {
        peer.setLocalDescription(answer, () => {
          try {
            const data = JSON.stringify({
              type: CONNECTIONS_ACTION_TYPES.ANSWER,
              answer,
              chatId,
              token,
            });

            webSocket.send(data);
          } catch (exception) {
            logger.error(exception);
          }
        });
      }, (error) => {
        logger.error(error);
      });
    });
  }
}

/**
 * @param {Object} information
 * @param {Object} peer
 */
function handleAnswer(information, peer) {
  const answer = information.answer;
  if (peer && answer) {
    peer.setRemoteDescription(new RTCSessionDescription(answer));
  }
}

/**
 * @param {Object} information
 * @param {Object} peer
 */
function handleCandidate(information, peer) {
  const IceCandidate = RTC.getICECandidate();

  const ice = information.ice;
  if (peer && ice) {
    const connection = peer.getConnection();
    if (connection) {
      peer.addIceCandidate(new IceCandidate(ice));
    }
  }
}

/**
 * @param {Object} peer
 * @returns {Object}
 */
function getDataChannel(peer) {
  return eventChannel((emit) => {
    /* eslint-disable no-param-reassign */
    peer.ondatachannel = (event) => {
      const channel = event.channel;
      if (channel) {
        emit(channel);
      }
    };
    /* eslint-enable no-param-reassign */

    return () => {
      /* eslint-disable no-param-reassign */
      peer.ondatachannel = null;
      /* eslint-enable no-param-reassign */
    };
  });
}

/**
 * @param {String} chatId
 * @param {Object} peer
 * @returns {Object}
 */
function* watchDataChannelEvents(chatId, peer) {
  const dataChannel = yield call(getDataChannel, peer);
  while (dataChannel) {
    const channel = yield take(dataChannel);
    yield put(setDataChannel(chatId, channel));
  }
}

/**
 * @param {Object} peer
 * @returns {Channel<T>}
 */
function getIceCandidate(peer) {
  return eventChannel((emit) => {
    /* eslint-disable no-param-reassign */
    peer.onicedandidate = (event) => {
      const candidate = event.candidate;
      if (candidate) {
        emit(candidate);
      }
    };
    /* eslint-enable no-param-reassign */

    return () => {
      /* eslint-disable no-param-reassign */
      peer.onicedandidate = null;
      /* eslint-enable no-param-reassign */
    };
  });
}

/**
 * @param {String} chatId
 * @param {Object} peer
 * @returns {Object}
 */
function* watchIceCandidateEvents(chatId, peer) {
  const iceCandidate = yield call(getIceCandidate, peer);
  while (iceCandidate) {
    const candidate = yield take(iceCandidate);
    const newAction = addCandidate(chatId, candidate);

    yield call(fetchCandidate, newAction);
  }
}

/**
 * @param {Object} webSocketInstance
 * @returns {Object}
 */
function getSocketChannel(webSocketInstance) {
  return eventChannel((emit) => {
    const onMessage = (message) => {
      const data = JSON.parse(message.data);
      emit(data);
    };

    webSocketInstance.addEventListener('message', onMessage);
    return () => {
      webSocketInstance.removeEventListener('message', onMessage);
    };
  });
}

/**
 * @returns {Object}
 */
function* watchSocketEvents() {
  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    const socketChannel = yield call(getSocketChannel, webSocketInstance);
    while (socketChannel) {
      const { Connections } = yield select();
      const message = yield take(socketChannel);

      const peer = Connections.getPeerByChatId(message.chatId);
      if (peer) {
        const connection = peer.getConnection();
        switch (message.type) {
          case CONNECTIONS_ACTION_TYPES.OFFER:
            handleOffer(message, connection);
            break;
          case CONNECTIONS_ACTION_TYPES.ANSWER:
            handleAnswer(message, connection);
            break;
          case CONNECTIONS_ACTION_TYPES.CANDIDATE:
            handleCandidate(message, connection);
            break;
          default:
            break;
        }
      }
    }
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function fetchJoinChat(action) {
  const { chatId, token } = action.payload;

  try {
    const data = JSON.stringify({
      type: CONNECTIONS_ACTION_TYPES.JOIN_CHAT,
      chatId,
      token,
    });

    webSocket.send(data);
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* fetchJoinChats() {
  const { Chats } = yield select();

  const chats = Chats.getChats();
  const token = Token.getToken();

  chats.forEach((chat) => {
    const chatId = chat.getId();
    const newAction = joinChat(chatId, token);

    return fetchJoinChat(newAction);
  });

  yield null;
}

export function* fetchSendMessage(action) {
  const { message } = action.payload;
  const { Users, Connections } = yield select();

  const accountEmail = Users.getAccount().getEmail();
  const peer = Connections.getPeerByChatId('1');
  if (peer) {
    const dataChannel = peer.getDataChannel();
    if (dataChannel && dataChannel.readyState === CONNECTIONS_READY_STATES.OPEN) {
      const data = JSON.stringify({
        message,
        senderEmail: accountEmail,
      });

      dataChannel.send(data);
    }
  }
}

export function* initialize() {
  navigator.getUserMedia = RTC.getUserMedia();

  const { Chats } = yield select();

  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    const joinChatsAction = joinChats();
    yield call(fetchJoinChats, joinChatsAction);

    const chats = Chats.getChats();
    const configuration = {
      iceServers: RTC.getICEServers(),
    };

    const forks = [];

    const RTCPeerConnection = RTC.getRTCPeerConnection();
    const chatsIds = chats.map(chat => chat.getId()).toArray();

    /* eslint-disable no-restricted-syntax */
    for (const chatId of chatsIds) {
      const peer = new RTCPeerConnection(configuration);

      yield put(addPeerConnection(chatId, peer));

      forks.push(fork(watchDataChannelEvents, chatId, peer));
      forks.push(fork(watchIceCandidateEvents, chatId, peer));
    }
    /* eslint-enable no-restricted-syntax */

    yield call(fetchOfferChats);

    yield [
      fork(watchSocketEvents),
      ...forks,
    ];
  }
}

/**
 * @returns {Object}
 */
export function* open() {
  if (!webSocket.getInstance()) {
    try {
      const webSocketInstance = webSocket.getInstance();
      if (!webSocketInstance) {
        webSocket.open();
      }
    } catch (exception) {
      logger.error(exception);
    }

    yield webSocket.getInstance();
  }
}

/**
 * @returns {Object}
 */
export function* close() {
  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    try {
      webSocketInstance.close();
    } catch (exception) {
      logger.error(exception);
    }

    yield webSocketInstance;
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* signIn(action) {
  const { friendsEmails } = action.payload;

  const token = Token.getToken();

  try {
    const data = JSON.stringify({
      type: CONNECTIONS_ACTION_TYPES.SIGNIN,
      token,
      friends: friendsEmails,
    });

    webSocket.send(data);
  } catch (exception) {
    logger.error(exception);
  }

  yield call(initialize);
}

/**
 * @returns {Object}
 */
export function* connectionsSaga() {
  yield takeEvery(OFFER_CHAT, fetchOfferChat);
  yield takeEvery(OFFER_CHATS, fetchOfferChats);
  yield takeEvery(JOIN_CHAT, fetchJoinChat);
  yield takeEvery(JOIN_CHATS, fetchJoinChats);
  yield takeEvery(SEND_MESSAGE, fetchSendMessage);
  yield takeEvery(OPEN, open);
  yield takeEvery(CLOSE, close);
  yield takeEvery(SIGN_IN, signIn);
}
