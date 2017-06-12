import { takeEvery, call, select } from 'redux-saga/effects';

import webSocket from '../websocket/websocket';

import { CONNECTIONS_ACTION_TYPES } from '../constants/connections';

import { OPEN, CLOSE, JOIN_CHAT, JOIN_CHATS, joinChat } from '../action-types/connections';

/**
 * @returns {Object}
 */
export function* open() {
  if (!webSocket.getInstance()) {
    webSocket.open();

    yield webSocket.getInstance();
  }
}

/**
 * @returns {Object}
 */
export function* close() {
  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    webSocketInstance.close();

    yield webSocketInstance;
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchJoinChat(action) {
  const { chatId, email } = action.payload;

  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    const payload = JSON.stringify({
      type: CONNECTIONS_ACTION_TYPES.JOIN_CHAT,
      data: {
        chatId,
        email,
      },
    });

    webSocketInstance.send(payload);

    yield webSocketInstance;
  }
}

/**
 * @returns {Object}
 */
export function* fetchJoinChats() {
  const { Chats, Users } = yield select();

  const chats = Chats.getChats();
  const accountEmail = Users.getAccount().getEmail();

  yield chats.map((chat) => {
    const chatId = chat.getId();
    const newAction = joinChat(chatId, accountEmail);

    return call(fetchJoinChat, newAction);
  });
}

/**
 * @returns {Object}
 */
export function* connectionsSaga() {
  yield takeEvery(OPEN, open);
  yield takeEvery(CLOSE, close);
  yield takeEvery(JOIN_CHAT, fetchJoinChat);
  yield takeEvery(JOIN_CHATS, fetchJoinChats);
}
