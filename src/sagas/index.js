import { fork } from 'redux-saga/effects';

import { usersSaga } from './users';
import { friendsSaga } from './friends';

export default function* () {
  yield [
    fork(usersSaga),
    fork(friendsSaga),
  ];
}
