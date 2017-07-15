/**
 * @const
 * @type {Object}
 */
export const CONNECTIONS_ACTION_TYPES = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
  ADD_CHAT_USER: 'ADD_CHAT_USER',
  JOIN_CHAT: 'JOIN_CHAT',
  LEAVE_CHAT: 'LEAVE_CHAT',
  OFFER: 'OFFER',
  ANSWER: 'ANSWER',
  CANDIDATE: 'CANDIDATE',
};

/**
 * @const
 * @type {Object}
 */
export const CONNECTIONS_WEB_SOCKET_STATES_CODES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
};

/**
 * @const
 * @type {Object}
 */
export const CONNECTIONS_READY_STATES = {
  OPEN: 'open',
};
