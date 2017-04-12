import { takeEvery, call, put } from 'redux-saga/effects';

import { verificationSignUp } from '../api/verification';

import { SIGN_UP } from '../action-types/users';
import { usersError } from '../action-types/messages';

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
    yield put(usersError(message));
  }
}

export function* usersSaga() {
  yield takeEvery(SIGN_UP, signUp);
}
