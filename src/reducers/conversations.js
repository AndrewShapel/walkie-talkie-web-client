import Conversations from '../models/conversations/conversations';

import { SET_ACTIVE_ID, RESET_ACTIVE_ID } from '../action-types/conversations';

const initialState = new Conversations();

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function conversation(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_ID:
      return state.setActiveId(action.payload.activeId);
    case RESET_ACTIVE_ID:
      return state.resetActiveId();
    default:
      return state;
  }
}
