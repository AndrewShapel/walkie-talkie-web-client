import Messages from '../models/messages/messages';
import MessagesFactory from '../models/messages/messages-factory';

import { MESSAGE_TYPES, MESSAGE_TARGETS } from '../constants/messages';

import { USERS_ERROR } from '../action-types/messages';

const initialState = new Messages();

export default function messages(state = initialState, action) {
  switch (action.type) {
    case USERS_ERROR:
      return state
        .pushMessage(MessagesFactory.createMessage(MESSAGE_TARGETS.USERS, action.payload.message, MESSAGE_TYPES.ERROR));
    default:
      return state;
  }
}
