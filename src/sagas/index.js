import { fork } from 'redux-saga/effects';

import { usersSaga } from './users';

export default function* () {
  console.log('tr');
  yield [
    fork(usersSaga),
  ];
}
