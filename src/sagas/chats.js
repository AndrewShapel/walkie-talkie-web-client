import { takeEvery, call } from 'redux-saga/effects';

import logger from '../logger/logger';

import { createChat } from '../api/graphql/chats';

import { CREATE_CHAT } from '../action-types/chats';

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
  yield takeEvery(CREATE_CHAT, fetchCreateChat);
}
