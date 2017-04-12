export const SET_MESSAGES = 'messages:UPDATE_MESSAGES';
/**
 * @param {Object} messages
 * @returns {Object}
 */
export const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: {
    messages,
  },
});

export const USERS_ERROR = 'messages:USERS_ERROR';

/**
 * @param {String} message
 * @returns {Object}
 */
export const usersError = message => ({
  type: USERS_ERROR,
  payload: {
    message,
  },
});
