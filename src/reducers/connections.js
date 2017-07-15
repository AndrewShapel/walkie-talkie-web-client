import Connections from '../models/connections/connections';
import ConnectionsFactory from '../models/connections/connections-factory';

import { ADD_PEER_CONNECTION, SET_DATA_CHANNEL } from '../action-types/connections';

const initialState = new Connections();

export default function connections(state = initialState, action) {
  switch (action.type) {
    case ADD_PEER_CONNECTION:
      return state.addPeer(ConnectionsFactory.createPeerConnection(action.payload.chatId, action.payload.peer));
    case SET_DATA_CHANNEL:
      return state
        .updatePeer(
          action.payload.chatId,
          state.getPeerByChatId(action.payload.chatId).setDataChannel(action.payload.dataChannel),
        );
    default:
      return state;
  }
}
