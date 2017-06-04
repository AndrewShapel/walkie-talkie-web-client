import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import Token from '../utils/token';

import { verificationSignIn, verificationSignUp } from '../api/verification';

import routes from '../constants/routes/routes';
import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';
import { USER_PERMISSION } from '../constants/user';

import { SIGN_IN, SIGN_UP, LOG_OUT, setAccount, setAccountPermission } from '../action-types/users';
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
export function* usersSaga() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(LOG_OUT, logOut);
}
