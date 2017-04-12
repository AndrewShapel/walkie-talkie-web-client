import { takeEvery, call, put } from 'redux-saga/effects';

import { verificationSignUp } from '../api/verification';

import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';

import { SIGN_UP } from '../action-types/users';
import { addMessage } from '../action-types/messages';

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
  yield takeEvery(SIGN_UP, signUp);
}
