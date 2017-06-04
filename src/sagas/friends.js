import { takeEvery, call } from 'redux-saga/effects';

import { getFriends } from '../api/graphql/friends';

import { GET_FRIENDS } from '../action-types/friends';

/**
 * @returns {Object}
 */
export function* fetchFriends() {
  const friendsResponse = yield call(getFriends);
  console.log(friendsResponse, 'tre');
}

/**
 * @returns {Object}
 */
export function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, fetchFriends);
}
