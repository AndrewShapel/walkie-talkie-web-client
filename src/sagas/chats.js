import { takeEvery, call, put, select } from 'redux-saga/effects';

import { push } from 'react-router-redux';

import logger from '../logger/logger';

import routes from '../constants/routes/routes';
import { CHAT_TYPES } from '../constants/chat';

import { getChats, createChat } from '../api/graphql/chats';

import { GET_CHATS, CREATE_CHAT, OPEN_CHAT, setChats, createChat as createChatAction } from '../action-types/chats';

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
    return yield call(createChat, title, type, members);
  } catch (exception) {
    logger.error(exception);

    return null;
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchOpenChat(action) {
  const { members, type } = action.payload;

  const { Chats } = yield select();

  const firstMemberEmail = members[0];
  const createdChat = (type === CHAT_TYPES.INDIVIDUAL)
    ? Chats.getChatsByMemberEmail(firstMemberEmail).find(chat => chat.getType() === CHAT_TYPES.INDIVIDUAL)
    : null;

  if (createdChat) {
    const chatId = createdChat.getId();
    const redirectTo = `${routes.conversation.url.base}${routes.conversation.url.specific.replace(/:id\?/, chatId)}`;

    yield put(push(redirectTo));
  } else {
    const convertedMember = {
      email: firstMemberEmail,
    };
    const newAction = createChatAction('', CHAT_TYPES.INDIVIDUAL, convertedMember);

    try {
      const chatResponse = yield fetchCreateChat(newAction);
      const responseData = chatResponse.data;

      const createdChatId = responseData.data.createChat.id;
      const redirectTo = `${routes.conversation.url.base}${routes.conversation.url.specific.replace(/:id\?/, createdChatId)}`;

      yield call(fetchChats);
      yield put(push(redirectTo));
    } catch (exception) {
      logger.error(exception);
    }
  }
}

/**
 * @returns {Object}
 */
export function* chatsSaga() {
  yield takeEvery(GET_CHATS, fetchChats);
  yield takeEvery(CREATE_CHAT, fetchCreateChat);
  yield takeEvery(OPEN_CHAT, fetchOpenChat);
}
