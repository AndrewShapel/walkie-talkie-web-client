import { eventChannel } from 'redux-saga';
import { takeEvery, take, call, put, select } from 'redux-saga/effects';

import logger from '../logger/logger';
import webSocket from '../websocket/websocket';
import RTC from '../utils/rtc';
import Token from '../utils/token';

import { CONNECTIONS_ACTION_TYPES } from '../constants/connections';

import {
  OPEN, CLOSE, SIGN_IN, OFFER_CHAT, JOIN_CHAT, JOIN_CHATS,
  joinChat, joinChats, addPeerConnection, addCandidate, setDataChannel,
} from '../action-types/connections';

const IceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;
const SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription;
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

/**
 * @param {Object} peer
 * @returns {Object}
 */
function getDataChannel(peer) {
  return eventChannel((emit) => {
    peer.ondatachannel = (event) => {
      const channel = event.channel;
      emit(channel);
    };

    return () => {
      peer.ondatachannel = null;
    };
  });
}

/**
 * @param {String} chatId
 * @param {Object} peer
 */
function* watchDataChannelEvents(chatId, peer) {
  const dataChannel = yield call(getDataChannel, peer);
  while (true) {
    const channel = yield take(dataChannel);
    const newAction = setDataChannel(chatId, channel);
    console.log(newAction);
  }
}

/**
 * @param {Object} peer
 * @returns {Channel<T>}
 */
function getIceCandidate(peer) {
  return eventChannel((emit) => {
    peer.onicecandidate = (event) => {
      const candidate = event.candidate;
      emit(candidate);
    };

    return () => {
      peer.onicecandidate = null;
    };
  });
}

/**
 * @param {String} chatId
 * @param {Object} peer
 */
function* watchIceCandidateEvents(chatId, peer) {
  const candidate = yield call(getIceCandidate, peer);
  while (true) {
    const candidate = yield take(candidate);
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

function* watchSocketEvents() {
  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    const socketChannel = yield call(getSocketChannel, webSocketInstance);
    while (true) {
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

export function* rtcSignIn() {
  const { Chats } = yield select();

  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    const joinChatsAction = joinChats();
    yield call(fetchJoinChats, joinChatsAction);

    const chats = Chats.getChats();
    const configuration = {
      iceServers: RTC.getICEServers(),
    };

    const RTCPeerConnection = RTC.getRTCPeerConnection();
    const chatsIds = chats.map(chat => chat.getId()).toArray();
    for (const chatId of chatsIds) {
      const peer = new RTCPeerConnection(configuration);

      yield watchDataChannelEvents(chatId, peer);
      yield watchIceCandidateEvents(chatId, peer);
      yield put(addPeerConnection(chatId, peer));
    }

    yield watchSocketEvents();
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

  const webSockerInstance = webSocket.getInstance();
  if (webSockerInstance) {
    const token = Token.getToken();

    try {
      const data = JSON.stringify({
        type: CONNECTIONS_ACTION_TYPES.SIGNIN,
        token,
        friends: friendsEmails,
      });

      webSockerInstance.send(data);
    } catch (exception) {
      logger.error(exception);
    }

    yield call(rtcSignIn);
  }
}

/**
 * @param {Object} information
 * @param {Object} peer
 */
function handleOffer(information, peer) {
  const { chatId, offer } = information;

  const webSocketInstance = webSocket.getInstance();
  if (peer && webSocketInstance) {
    const token = Token.getToken();

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

            webSocketInstance.send(data);
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
  const ice = information.ice;
  if (peer && ice) {
    const connection = peer.getConnection();
    if (connection) {
      peer.addIceCandidate(new IceCandidate(ice));
    }
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* offerChat(action) {
  const { chatId } = action.payload;
  const { Connections } = yield select();

  const token = Token.getToken();
  const webSocketInstance = webSocket.getInstance();

  const peer = Connections.getPeerByChatId(chatId);
  if (peer) {
    const peerConnection = peer.getConnection();
    const dataChannel = peerConnection.createDataChannel(chatId, {
      reliable: true,
    });

    dataChannel.onopen = function () {
      console.log('data channel is opened');
    };

    dataChannel.onerror = function (error) {
      console.log('Ooops...error:', error);
    };

    dataChannel.onmessage = function (event) {
      console.log(event.data);
    };

    dataChannel.onclose = function () {
      console.log('data channel is closed');
    };

    peerConnection.createOffer((offer) => {
      peerConnection.setLocalDescription(offer, () => {
        try {
          const data = JSON.stringify({
            type: CONNECTIONS_ACTION_TYPES.OFFER,
            offer,
            chatId,
            token,
          });

          webSocketInstance.send(data);
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
  }
}

window.writeMessage = (chatId) => {
  const { peer, dc } = window.peers[chatId];
  dc.send('test');
};

// export function fetchDataChannel(action) {
//   const { chatId, dataChannel } = action.payload;
//
//   const token = Token.getToken();
//   const webSocketInstance = webSocket.getInstance();
//   if (webSocketInstance) {
//     try {
//       const data = JSON.stringify({
//         type: CONNECTIONS_ACTION_TYPES.
//       })
//     }
//   }
// }

/**
 * @param {Object} action
 * @returns {Object}
 */
export function fetchCandidate(action) {
  const { chatId, candidate } = action;

  const token = Token.getToken();
  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    try {
      const data = JSON.stringify({
        type: CONNECTIONS_ACTION_TYPES.CANDIDATE,
        chatId,
        ice: candidate,
        token,
      });

      webSocketInstance.send(data);
    } catch (exception) {
      logger.error(exception);
    }
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function fetchJoinChat(action) {
  const { chatId, token } = action.payload;

  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    try {
      const data = JSON.stringify({
        type: CONNECTIONS_ACTION_TYPES.JOIN_CHAT,
        chatId,
        token,
      });

      webSocketInstance.send(data);
    } catch (exception) {
      logger.error(exception);
    }
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

/**
 * @returns {Object}
 */
export function* connectionsSaga() {
  yield takeEvery(OPEN, open);
  yield takeEvery(CLOSE, close);
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(OFFER_CHAT, offerChat);
  yield takeEvery(JOIN_CHAT, fetchJoinChat);
  yield takeEvery(JOIN_CHATS, fetchJoinChats);
}
