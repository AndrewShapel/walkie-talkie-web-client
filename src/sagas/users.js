import { takeEvery } from 'redux-saga';

import { SIGN_UP } from '../action-types/users';

export function* signUp() {
  yield null;
}

export function* usersSaga() {
  yield takeEvery(SIGN_UP, () => console.log('tr'));
}
