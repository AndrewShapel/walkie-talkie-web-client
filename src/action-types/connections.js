export const OFFER_CHAT = 'connections:OFFER_CHAT';
/**
 * @param {String} chatId
 * @returns {Object}
 */
export const offerChat = chatId => ({
  type: OFFER_CHAT,
  payload: {
    chatId,
  },
});

export const OFFER_CHATS = 'connection:OFFER_CHATS';
/**
 * @returns {Object}
 */
export const offerChats = () => ({
  type: OFFER_CHATS,
});

export const JOIN_CHAT = 'connections:JOIN_CHAT';
/**
 * @param {String} chatId
 * @param {String} token
 * @returns {Object}
 */
export const joinChat = (chatId, token) => ({
  type: JOIN_CHAT,
  payload: {
    chatId,
    token,
  },
});

export const JOIN_CHATS = 'connections:JOIN_CHATS';
/**
 * @returns {Object}
 */
export const joinChats = () => ({
  type: JOIN_CHATS,
});

export const SEND_MESSAGE = 'connections:SET_MESSAGE';
/**
 * @param {String} message
 * @returns {Object}
 */
export const sendMessage = message => ({
  type: SEND_MESSAGE,
  payload: {
    message,
  },
});

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

export const ADD_PEER_CONNECTION = 'connections:ADD_PEER_CONNECTION';
/**
 * @param {String} chatId
 * @param {Object} peer
 */
export const addPeerConnection = (chatId, peer) => ({
  type: ADD_PEER_CONNECTION,
  payload: {
    chatId,
    peer,
  },
});

export const ADD_CANDIDATE = 'connections:ADD_CANDIDATE';
/**
 * @param {String} chatId
 * @param {Object} candidate
 */
export const addCandidate = (chatId, candidate) => ({
  type: ADD_CANDIDATE,
  payload: {
    chatId,
    candidate,
  },
});

export const SET_DATA_CHANNEL = 'connections:SET_DATA_CHANNEL';
/**
 * @param {String} chatId
 * @param {Object} dataChannel
 */
export const setDataChannel = (chatId, dataChannel) => ({
  type: SET_DATA_CHANNEL,
  payload: {
    chatId,
    dataChannel,
  },
});
