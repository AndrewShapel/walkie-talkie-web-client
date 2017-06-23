import { fork } from 'redux-saga/effects';

import { chatsSaga } from './chats';
import { connectionsSaga } from './connections';
import { friendsSaga } from './friends';
import { usersSaga } from './users';

export default function* () {
  yield [
    fork(chatsSaga),
    fork(connectionsSaga),
    fork(friendsSaga),
    fork(usersSaga),
  ];
}
