import Users from '../models/users/users';

const initialState = new Users();

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
