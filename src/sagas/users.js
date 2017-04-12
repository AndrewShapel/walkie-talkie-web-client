import { takeEvery, call, put } from 'redux-saga/effects';

import { verificationSignIn, verificationSignUp } from '../api/verification';

import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';

import { SIGN_IN, SIGN_UP } from '../action-types/users';
import { addMessage } from '../action-types/messages';

/**
 * @param {Object} action
 */
export function* signIn(action) {
  const { email, password } = action.payload;

  try {
    const res = yield call(verificationSignIn, email, password);
    console.log(res);
  } catch (exception) {
    const message = exception.response.data;
    yield put(addMessage(MESSAGE_TARGETS.USERS, message, MESSAGE_TYPES.ERROR));
  }
}

/**
 * @param {Object} action
 */
export function* signUp(action) {
  const { email, firstName, lastName, password } = action.payload;

  try {
    const res = yield call(verificationSignUp, email, firstName, lastName, password);
    console.log(res);
  } catch (exception) {
    const message = exception.response.data;
    yield put(addMessage(MESSAGE_TARGETS.USERS, message, MESSAGE_TYPES.ERROR));
  }
}

export function* usersSaga() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(SIGN_UP, signUp);
}
