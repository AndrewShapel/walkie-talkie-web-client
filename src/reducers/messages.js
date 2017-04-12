import Messages from '../models/messages/messages';
import MessagesFactory from '../models/messages/messages-factory';

import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';

import { SET_MESSAGES, USERS_ERROR } from '../action-types/messages';

const initialState = new Messages();

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function messages(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return state.setMessages(action.payload.messages);
    case USERS_ERROR:
      return state
        .pushMessage(MessagesFactory.createMessage(MESSAGE_TARGETS.USERS, action.payload.message, MESSAGE_TYPES.ERROR));
    default:
      return state;
  }
}
