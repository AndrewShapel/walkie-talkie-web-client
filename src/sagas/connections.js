import { takeEvery, select } from 'redux-saga/effects';

import logger from '../logger/logger';
import webSocket from '../websocket/websocket';
import Token from '../utils/token';

import { CONNECTIONS_ACTION_TYPES } from '../constants/connections';

import { OPEN, CLOSE, SIGN_IN, JOIN_CHAT, JOIN_CHATS, joinChat } from '../action-types/connections';

/**
 * @returns {Object}
 */
export function* open() {
  if (!webSocket.getInstance()) {
    try {
      webSocket.open();

      const webSocketInstance = webSocket.getInstance();
      if (webSocketInstance) {
        webSocketInstance.addEventListener('message', (message) => {
          console.log(message);
        });
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
export function signIn(action) {
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
  }
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
