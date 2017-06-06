import { fork } from 'redux-saga/effects';

import { friendsSaga } from './friends';
import { usersSaga } from './users';

export default function* () {
  yield [
    fork(friendsSaga),
    fork(usersSaga),
  ];
}
