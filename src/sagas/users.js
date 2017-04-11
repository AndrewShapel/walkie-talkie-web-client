import { takeEvery, call, put } from 'redux-saga/effects';

import { verificationSignUp } from '../api/verification';

import { SIGN_UP, signUpSucceeded, signUpFailed } from '../action-types/users';

/**
 * @param {Object} action
 */
export function* signUp(action) {
  const { email, firstName, lastName, password } = action.payload;

  try {
    const res = yield call(verificationSignUp, email, firstName, lastName, password);
    yield put(signUpSucceeded(res));
  } catch (exception) {
    yield put(signUpFailed(exception.message));
  }
}

export function* usersSaga() {
  yield takeEvery(SIGN_UP, signUp);
}
