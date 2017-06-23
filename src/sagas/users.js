import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import logger from '../logger/logger';
import Token from '../utils/token';

import { verificationSignIn, verificationSignUp, verificationSignOut } from '../api/verification';
import { getAccount, getUsers } from '../api/graphql/users';

import routes from '../constants/routes/routes';
import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';
import { USER_PERMISSION } from '../constants/user';

import { SIGN_IN, SIGN_UP, SIGN_OUT, GET_ACCOUNT, GET_USERS, setAccount, setAccountPermission, setUsers } from '../action-types/users';
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
    logger.error(exception);
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
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* signOut() {
  const token = Token.getToken();
  if (token) {
    try {
      const redirectTo = `${routes.userVerification.url.base}${routes.userVerification.url.signin}`;

      yield call(verificationSignOut);
      yield put(push(redirectTo));

      Token.removeToken();
    } catch (exception) {
      logger.error(exception);
    }
  }
}

/**
 * @returns {Object}
 */
export function* fetchAccount() {
  const accountResponse = yield call(getAccount);
  const responseData = accountResponse.data;

  try {
    const { email, firstName, lastName } = responseData.data.me;

    yield put(setAccount(email, firstName, lastName));
    yield put(setAccountPermission(USER_PERMISSION.BASIC));
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* fetchUsers() {
  const usersResponse = yield call(getUsers);
  const responseData = usersResponse.data;

  try {
    yield put(setUsers(responseData.data.users));
  } catch (exception) {
    logger.error(exception);
  }
}

/**
 * @returns {Object}
 */
export function* usersSaga() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(SIGN_OUT, signOut);
  yield takeEvery(GET_ACCOUNT, fetchAccount);
  yield takeEvery(GET_USERS, fetchUsers);
}
