import { takeEvery, call, put } from 'redux-saga/effects';

import { getFriends, getFriendRequests } from '../api/graphql/friends';

import { GET_FRIENDS, GET_FRIEND_REQUESTS, ACCEPT_FRIEND_REQUEST, setFriends, setFriendRequests } from '../action-types/friends';

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

export function* fetchAcceptFriendRequest(action) {
  const { email } = action.payload;

  console.log(email);
  yield 5;
}

export function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, fetchFriends);
  yield takeEvery(GET_FRIEND_REQUESTS, fetchFriendRequests);
  // yield takeEvery(MAKE_FRIEND_REQUEST, fetchFriendRequest);
  yield takeEvery(ACCEPT_FRIEND_REQUEST, fetchAcceptFriendRequest);
}
