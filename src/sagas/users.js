import { takeEvery, call, put } from 'redux-saga/effects';

import Token from '../utils/token';

import { verificationSignIn, verificationSignUp } from '../api/verification';

import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';

import { SIGN_IN, SIGN_UP, SET_ACCOUNT_PERMISSION, setAccount, setAccountPermission } from '../action-types/users';
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
    yield put(setAccount(responseData.id, responseData.email));
  } catch (exception) {
    const message = exception.response.data;
    yield put(addMessage(MESSAGE_TARGETS.USERS, message, MESSAGE_TYPES.ERROR));
  }
}

/**
 * @param {Object} action
 * @returns {Object}
 */
export function* setPermission(action) {
  yield put(setAccountPermission(action.payload.accountPermission));
}

export function* usersSaga() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(SET_ACCOUNT_PERMISSION, setPermission);
}
