import { takeEvery, call, put } from 'redux-saga/effects';

import logger from '../logger/logger';

import { getChats, createChat } from '../api/graphql/chats';

import { GET_CHATS, CREATE_CHAT, setChats } from '../action-types/chats';

/**
 * @returns {Object}
 */
export function* fetchChats() {
  try {
    const chatsResponse = yield call(getChats);
    const responseData = chatsResponse.data;

    yield put(setChats(responseData.data.me.chats));
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchCreateChat(action) {
  const { title, type, members } = action.payload;

  try {
    yield call(createChat, title, type, members);
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* chatsSaga() {
  yield takeEvery(GET_CHATS, fetchChats);
  yield takeEvery(CREATE_CHAT, fetchCreateChat);
}
