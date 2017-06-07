import { fork } from 'redux-saga/effects';

import { chatsSaga } from './chats';
import { friendsSaga } from './friends';
import { usersSaga } from './users';

export default function* () {
  yield [
    fork(chatsSaga),
    fork(friendsSaga),
    fork(usersSaga),
  ];
}
