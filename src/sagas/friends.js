import { takeEvery, call, put } from 'redux-saga/effects';

import { getFriends, makeFriendRequest } from '../api/graphql/friends';

import { GET_FRIENDS, MAKE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, setFriends } from '../action-types/friends';

/**
 * @returns {Object}
 */
export function* fetchFriends() {
  const friendsResponse = yield call(getFriends);
  const responseData = friendsResponse.data;

  yield put(setFriends(responseData.data.me.friends));
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* fetchFriendRequest(action) {
  const { email } = action.payload;
  yield call(makeFriendRequest, email);
}

export function* fetchAcceptFriendRequest(action) {
  const { email } = action.payload;

  console.log(email);
  yield 5;
}

export function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, fetchFriends);
  yield takeEvery(MAKE_FRIEND_REQUEST, fetchFriendRequest);
  yield takeEvery(ACCEPT_FRIEND_REQUEST, fetchAcceptFriendRequest);
}
