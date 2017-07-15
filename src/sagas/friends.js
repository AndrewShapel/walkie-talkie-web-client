import { takeEvery, call, put } from 'redux-saga/effects';

import logger from '../logger/logger';

import { getFriends, getFriendRequests, makeFriendRequest, acceptFriendRequest, declineFriendRequest } from '../api/graphql/friends';

import {
  GET_FRIENDS, GET_FRIEND_REQUESTS, MAKE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, DECLINE_FRIEND_REQUEST,
  setFriends, setFriendRequests,
} from '../action-types/friends';

/**
 * @returns {Object}
 */
export function* fetchFriends() {
  const friendsResponse = yield call(getFriends);
  const responseData = friendsResponse.data;

  try {
    yield put(setFriends(responseData.data.me.friends));
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* fetchFriendRequests() {
  const friendRequestsResponse = yield call(getFriendRequests);
  const responseData = friendRequestsResponse.data;

  try {
    yield put(setFriendRequests(responseData.data.me.friendRequests));
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchMakeFriendRequest(action) {
  const { email } = action.payload;

  try {
    yield call(makeFriendRequest, email);
    yield call(fetchFriendRequests);
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchAcceptFriendRequest(action) {
  const { email } = action.payload;

  try {
    yield call(acceptFriendRequest, email);
    yield call(fetchFriendRequests);
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchDeclineFriendRequest(action) {
  const { email } = action.payload;

  try {
    yield call(declineFriendRequest, email);
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, fetchFriends);
  yield takeEvery(GET_FRIEND_REQUESTS, fetchFriendRequests);
  yield takeEvery(MAKE_FRIEND_REQUEST, fetchMakeFriendRequest);
  yield takeEvery(ACCEPT_FRIEND_REQUEST, fetchAcceptFriendRequest);
  yield takeEvery(DECLINE_FRIEND_REQUEST, fetchDeclineFriendRequest);
}
