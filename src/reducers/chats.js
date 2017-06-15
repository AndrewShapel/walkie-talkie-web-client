import Chats from '../models/chats/chats';
import ChatsFactory from '../models/chats/chats-factory';

import { SET_CHATS } from '../action-types/chats';

const initialState = new Chats();

/**
 * @param {Object} state
 * @param {Object} action
 */
export default function chats(state = initialState, action) {
  switch (action.type) {
    case SET_CHATS:
      return state.setChats(ChatsFactory.createChats(action.payload.chats));
    default:
      return state;
  }
}
