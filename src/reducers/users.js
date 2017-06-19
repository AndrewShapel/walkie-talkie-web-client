import Users from '../models/users/users';
import UsersFactory from '../models/users/users-factory';

import { SET_ACCOUNT, SET_ACCOUNT_PERMISSION, SET_USERS } from '../action-types/users';

const initialState = new Users();

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function users(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT:
      return state.setAccount(
        UsersFactory.createAccount(action.payload.email, action.payload.firstName, action.payload.lastName),
      );
    case SET_ACCOUNT_PERMISSION:
      return state.setAccount(state.getAccount().setPermission(action.payload.accountPermission));
    case SET_USERS:
      return state.setUsers(UsersFactory.createUsers(action.payload.users));
    default:
      return state;
  }
}
