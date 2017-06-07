export const GET_CHATS = 'chats:GET_CHATS';
/**
 * @returns {Object}
 */
export const getChats = () => ({
  type: GET_CHATS,
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
