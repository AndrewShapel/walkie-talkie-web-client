import { takeEvery, call, put, select } from 'redux-saga/effects';

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

export function* rtcSignIn() {
  const { Chats } = yield select();

  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    window.peers = {};

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

      /**
       * @param {Object} event
       */
      peer.ondatachannel = (event) => {
        window.peers[chatId].dc = event.channel;
      };

      /**
       * @param {Object} event
       */
      peer.onicecandidate = (event) => {
        const newAction = addCandidate(chatId, event.candidate);
        fetchCandidate(newAction);
      };

      yield put(addPeerConnection(chatId, peer));
    }

    webSocketInstance.onmessage = (message) => {
      const data = JSON.parse(message.data);

      switch (data.type) {
        case CONNECTIONS_ACTION_TYPES.OFFER:
          handleOffer(data);
          break;
        case CONNECTIONS_ACTION_TYPES.ANSWER:
          handleAnswer(data);
          break;
        case CONNECTIONS_ACTION_TYPES.CANDIDATE:
          handleCandidate(data);
          break;
        default:
          break;
      }
    };
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

  const webSocketServer = webSocket.getInstance();
  if (webSocketServer) {
    const token = Token.getToken();

    try {
      const data = JSON.stringify({
        type: CONNECTIONS_ACTION_TYPES.SIGNIN,
        token,
        friends: friendsEmails,
      });

      webSocketServer.send(data);
    } catch (exception) {
      logger.error(exception);
    }

    yield call(rtcSignIn);
  }
}

function handleOffer(data) {
  console.log('HandleOffer');
  const ws = webSocket.getInstance();
  const token = Token.getToken();
  const { email, chatId, type, offer } = data;
  const { peer } = window.peers[chatId];

  peer.setRemoteDescription(new SessionDescription(offer), () => {
    peer.createAnswer((answer) => {
      peer.setLocalDescription(answer, () => {
        console.log('SendAnswer');
        const answerData = JSON.stringify({
          type: 'ANSWER',
          answer,
          chatId,
          token,
        });
        ws.send(answerData);
      });
    }, (error) => {
      console.log('Error when creating an answer', error);
    });
  });
}

function handleAnswer(data) {
  console.log('tre');
  const { email, chatId, type, answer } = data;
  const { peer, dc } = window.peers[chatId];
  console.log('HandleAnswer');
  peer.setRemoteDescription(new RTCSessionDescription(answer));
}

function handleCandidate(data) {
  console.log('HandleICE');
  const { chatId, type, ice } = data;
  const { peer } = window.peers[chatId];
  if (ice) {
    peer.addIceCandidate(new IceCandidate(ice));
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

    yield put(setDataChannel(chatId, dataChannel));

    peerConnection.createOffer((offer) => {
      peerConnection.setLocalDescription(offer, () => {
        console.log('SendOffer');
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
  }
}

window.writeMessage = (chatId) => {
  const { peer, dc } = window.peers[chatId];
  dc.send('test');
};

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
