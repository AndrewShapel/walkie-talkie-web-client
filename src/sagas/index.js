import { fork } from 'redux-saga/effects';

import { usersSaga } from './users';

export default function* () {
  yield [
    fork(usersSaga),
  ];
}
