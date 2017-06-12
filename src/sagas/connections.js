import { takeEvery } from 'redux-saga/effects';

import webSocket from '../websocket/websocket';

import { OPEN, CLOSE } from '../action-types/connections';

/**
 * @returns {Object}
 */
export function* open() {
  if (!webSocket.getInstance()) {
    webSocket.open();

    yield webSocket.getInstance();
  }
}

/**
 * @returns {Object}
 */
export function* close() {
  const webSocketInstance = webSocket.getInstance();
  if (webSocketInstance) {
    webSocketInstance.close();

    yield webSocketInstance;
  }
}

/**
 * @returns {Object}
 */
export function* connectionsSaga() {
  yield takeEvery(OPEN, open);
  yield takeEvery(CLOSE, close);
}
