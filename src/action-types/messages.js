export const ADD_MESSAGE = 'messages:ADD_MESSAGE';
/**
 * @param {String} target
 * @param {String} text
 * @param {String} type
 * @returns {Object}
 */
export const addMessage = (target, text, type) => ({
  type: ADD_MESSAGE,
  payload: {
    target,
    text,
    type,
  },
});

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
