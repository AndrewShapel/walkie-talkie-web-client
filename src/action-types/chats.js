export const ADD_MESSAGE = 'chats:ADD_MESSAGE';
/**
 * @param {String} body
 * @param {Object} timestamp
 * @param {Object} user
 */
export const addMessage = (body, timestamp, user) => ({
  type: ADD_MESSAGE,
  payload: {
    body,
    timestamp,
    user,
  },
});

export const GET_CHATS = 'chats:GET_CHATS';
/**
 * @returns {Object}
 */
export const getChats = () => ({
  type: GET_CHATS,
});

export const SET_CHATS = 'chats:SET_CHATS';
/**
 * @param {Object} chats
 * @returns {Object}
 */
export const setChats = chats => ({
  type: SET_CHATS,
  payload: {
    chats,
  },
});

export const CREATE_CHAT = 'chats:CREATE_CHAT';
/**
 * @param {String} title
 * @param {String} type
 * @param {Array} members
 */
export const createChat = (title, type, members) => ({
  type: CREATE_CHAT,
  payload: {
    title,
    type,
    members,
  },
});

export const OPEN_CHAT = 'chats:OPEN_CHAT';
/**
 * @param {Array} members
 * @param {String} type
 */
export const openChat = (members, type) => ({
  type: OPEN_CHAT,
  payload: {
    members,
    type,
  },
});
