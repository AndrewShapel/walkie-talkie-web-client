import Chats from '../models/chats/chats';
import ChatsFactory from '../models/chats/chats-factory';

import { ADD_MESSAGE, SET_CHATS } from '../action-types/chats';

const initialState = new Chats();

/**
 * @param {Object} state
 * @param {Object} action
 */
export default function chats(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.updateChat(
        action.payload.chatId,
        state.getChatById(action.payload.chatId).addMessage(
          ChatsFactory.createChatMessage(action.payload.body, action.payload.timestamp, action.payload.senderEmail),
        ),
      );
    case SET_CHATS:
      return state.setChats(ChatsFactory.createChats(action.payload.chats));
    default:
      return state;
  }
}
