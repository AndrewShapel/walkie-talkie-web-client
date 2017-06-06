import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import Token from '../utils/token';

import { verificationSignIn, verificationSignUp } from '../api/verification';
import { getFriends, makeFriendRequest } from '../api/graphql/friends';
import { getUsers } from '../api/graphql/users';

import routes from '../constants/routes/routes';
import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';
import { USER_PERMISSION } from '../constants/user';

import {
  SIGN_IN, SIGN_UP, LOG_OUT, GET_FRIENDS, MAKE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, GET_USERS,
  setAccount, setAccountPermission, setFriends, setUsers,
} from '../action-types/users';
import { addMessage } from '../action-types/messages';

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* signIn(action) {
  const { email, password } = action.payload;

  try {
    const tokenResponse = yield call(verificationSignIn, email, password);
    const responseData = tokenResponse.data;
    Token.setToken(responseData.token);

    yield put(setAccountPermission(USER_PERMISSION.BASIC));
    yield put(push(routes.conversation.url.base));
  } catch (exception) {
    const message = exception.response.data;
    yield put(addMessage(MESSAGE_TARGETS.USERS, message, MESSAGE_TYPES.ERROR));
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* signUp(action) {
  const { email, firstName, lastName, password } = action.payload;

  try {
    const accountResponse = yield call(verificationSignUp, email, firstName, lastName, password);
    const responseData = accountResponse.data;
    const redirectTo = `${routes.userVerification.url.base}${routes.userVerification.url.signin}`;

    yield put(setAccount(responseData.id, responseData.email));
    yield put(push(redirectTo));
  } catch (exception) {
    const message = exception.response.data;
    yield put(addMessage(MESSAGE_TARGETS.USERS, message, MESSAGE_TYPES.ERROR));
  }
}

/**
 * @returns {Object}
 */
export function* logOut() {
  const token = Token.getToken();
  if (token) {
    const redirectTo = `${routes.userVerification.url.base}${routes.userVerification.url.signin}`;
    Token.removeToken();

    yield put(push(redirectTo));
  }
}

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
}

/**
 * @returns {Object}
 */
export function* fetchUsers() {
  const usersResponse = yield call(getUsers);
  const responseData = usersResponse.data;

  yield put(setUsers(responseData.data.users));
}

/**
 * @returns {Object}
 */
export function* usersSaga() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(LOG_OUT, logOut);
  yield takeEvery(GET_FRIENDS, fetchFriends);
  yield takeEvery(MAKE_FRIEND_REQUEST, fetchFriendRequest);
  yield takeEvery(ACCEPT_FRIEND_REQUEST, fetchAcceptFriendRequest);
  yield takeEvery(GET_USERS, fetchUsers);
}
