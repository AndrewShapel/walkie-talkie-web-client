export const OPEN = 'connections:OPEN';
/**
 * @returns {Object}
 */
export const open = () => ({
  type: OPEN,
});

export const CLOSE = 'connections:CLOSE';
/**
 * @returns {Object}
 */
export const close = () => ({
  type: CLOSE,
});

export const SIGN_IN = 'connections:SIGN_IN';
/**
 * @returns {Object}
 */
export const signIn = friendsEmails => ({
  type: SIGN_IN,
  payload: {
    friendsEmails,
  },
});

export const JOIN_CHAT = 'connections:JOIN_CHAT';
/**
 * @param {String} chatId
 * @param {String} email
 * @returns {Object}
 */
export const joinChat = (chatId, email) => ({
  type: JOIN_CHAT,
  payload: {
    chatId,
    email,
  },
});

export const JOIN_CHATS = 'connections:JOIN_CHATS';
/**
 * @returns {Object}
 */
export const joinChats = () => ({
  type: JOIN_CHATS,
});
