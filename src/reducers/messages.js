import Messages from '../models/messages/messages';
import MessagesFactory from '../models/messages/messages-factory';

import { ADD_MESSAGE, SET_MESSAGES } from '../action-types/messages';

const initialState = new Messages();

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function messages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return state
        .addMessage(MessagesFactory.createMessage(action.payload.target, action.payload.text, action.payload.type));
    case SET_MESSAGES:
      return state.setMessages(action.payload.messages);
    default:
      return state;
  }
}
