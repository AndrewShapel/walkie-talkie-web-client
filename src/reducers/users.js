import Users from '../models/users/users';
import UsersFactory from '../models/users/users-factory';

import { SET_ACCOUNT } from '../action-types/users';

const initialState = new Users();

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function users(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT:
      return state.setAccount(UsersFactory.createAccount(action.payload.id, action.payload.email));
    default:
      return state;
  }
}
