export const USERS_ERROR = 'messages:USERS_ERROR';

/**
 * @param {String} message
 * @return {Object}
 */
export const usersError = message => ({
  type: USERS_ERROR,
  payload: {
    message,
  },
});
