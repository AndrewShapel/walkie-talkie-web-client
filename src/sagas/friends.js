import { takeEvery, call, put } from 'redux-saga/effects';

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

  yield put(setFriends(responseData.data.me.friends));
}

/**
 * @returns {Object}
 */
export function* fetchFriendRequests() {
  const friendRequestsResponse = yield call(getFriendRequests);
  const responseData = friendRequestsResponse.data;

  yield put(setFriendRequests(responseData.data.me.friendRequests));
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchMakeFriendRequest(action) {
  const { email } = action.payload;

  yield call(makeFriendRequest, email);
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchAcceptFriendRequest(action) {
  const { email } = action.payload;

  yield call(acceptFriendRequest, email);
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchDeclineFriendRequest(action) {
  const { email } = action.payload;

  yield call(declineFriendRequest, email);
}

export function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, fetchFriends);
  yield takeEvery(GET_FRIEND_REQUESTS, fetchFriendRequests);
  yield takeEvery(MAKE_FRIEND_REQUEST, fetchMakeFriendRequest);
  yield takeEvery(ACCEPT_FRIEND_REQUEST, fetchAcceptFriendRequest);
  yield takeEvery(DECLINE_FRIEND_REQUEST, fetchDeclineFriendRequest);
}