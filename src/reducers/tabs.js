import Tabs from '../models/tabs/tabs';

import { SET_ACTIVE } from '../action-types/tabs';

const initialState = new Tabs();

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function tabs(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return state.setActiveTab(action.payload.activeTab);
    default:
      return state;
  }
}
