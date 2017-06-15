import { takeEvery, select } from 'redux-saga/effects';

import logger from '../logger/logger';
import webSocket from '../websocket/websocket';
import Token from '../utils/token';
import Store from '../store/store';

import { CONNECTIONS_ACTION_TYPES } from '../constants/connections';

import { OPEN, CLOSE, SIGN_IN, JOIN_CHAT, JOIN_CHATS, joinChat } from '../action-types/connections';

const RTCPeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
const IceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;
const SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription;
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

/**
 * @returns {Object}
 */
export function* open() {
  if (!webSocket.getInstance()) {
    try {
      webSocket.open();

      const webSocketInstance = webSocket.getInstance();
      if (webSocketInstance) {
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
  const { Chats } = yield select();
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
    RTCOnLogin(Chats);
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

window.offerChat = (chatId) => {
  console.log('OfferChat');
  const ws = webSocket.getInstance();
  const token = Token.getToken();

  const { peer } = window.peers[chatId];

  const dc = peer.createDataChannel(`${chatId}`, { reliable: true });

  dc.onopen = function () {
    console.log('data channel is opened');
  };

  dc.onerror = function (error) {
    console.log('Ooops...error:', error);
  };

  dc.onmessage = function (event) {
    console.log(event.data);
  };

  dc.onclose = function () {
    console.log('data channel is closed');
  };

  window.peers[chatId] = { peer, dc };

  peer.createOffer((offer) => {
    peer.setLocalDescription(offer, () => {
      console.log('SendOffer');
      const data = JSON.stringify({
        type: 'OFFER',
        offer,
        chatId,
        token,
      });
      ws.send(data);
    }, (error) => {
      console.log(error);
    });
  }, (error) => {
    console.log('Error when creating an offer');
  });
};

window.writeMessage = (chatId) => {
  const { peer, dc } = window.peers[chatId];
  dc.send('test');
};

function RTCOnLogin(Chats) {
  const chats = Chats.getChats();
  const token = Token.getToken();
  const ws = webSocket.getInstance();

  const configuration = {
    iceServers: [
      {
        url: 'stun:23.21.150.121',
      }, {
        url: 'stun:stun.l.google.com:19302',
      }, {
        url: 'turn:numb.viagenie.ca',
        credential: 'webrtcdemo',
        username: 'louis%40mozilla.com',
      },
    ],
  };

  window.peers = {};

  chats.forEach((chat) => {
    const chatJoin = JSON.stringify({
      type: 'JOIN_CHAT',
      chatId: chat.getId(),
      token,
    });
    ws.send(chatJoin);

    const peer = new RTCPeerConnection(configuration);
    peer.ondatachannel = function (e) {
      const dc = e.channel;
      dc.onerror = function (error) {
        console.log('Ooops...error:', error);
      };

      dc.onmessage = function (event) {
        console.log(event.data);
      };
      dc.onopen = function () {
        console.log('data channel is opened');
      };
      dc.onclose = function () {
        console.log('data channel is closed');
      };
      window.peers[chat.getId()].dc = dc;
    };
    peer.onicecandidate = function (event) {
      const data = JSON.stringify({
        type: 'CANDIDATE',
        chatId: chat.getId(),
        ice: event.candidate,
        token,
      });
      console.log('SendICE');
      ws.send(data);
    };

    window.peers[chat.getId()] = { peer };
  });

  ws.onmessage = function (msg) {
    const data = JSON.parse(msg.data);

    switch (data.type) {
      case 'OFFER':
        handleOffer(data);
        break;
      case 'ANSWER':
        handleAnswer(data);
        break;
      case 'CANDIDATE':
        handleCandidate(data);
        break;
      default:
        break;
    }
  };
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function fetchJoinChat(action) {
  const { chatId, email } = action.payload;

  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    try {
      const data = JSON.stringify({
        type: CONNECTIONS_ACTION_TYPES.JOIN_CHAT,
        chatId,
        email,
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
  const { Chats, Users } = yield select();

  const chats = Chats.getChats();
  const accountEmail = Users.getAccount().getEmail();

  chats.forEach((chat) => {
    const chatId = chat.getId();
    const newAction = joinChat(chatId, accountEmail);

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
  yield takeEvery(JOIN_CHAT, fetchJoinChat);
  yield takeEvery(JOIN_CHATS, fetchJoinChats);
}
