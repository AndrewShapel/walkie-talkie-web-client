export const GET_FRIEND_REQUESTS = 'friends:GET_FRIEND_REQUESTS';
/**
 * @returns {Object}
 */
export const getFriendRequests = () => ({
  type: GET_FRIEND_REQUESTS,
});

export const SET_FRIEND_REQUESTS = 'friends:SET_FRIEND_REQUESTS';
/**
 * @param {Object} friendRequests
 * @returns {Object}
 */
export const setFriendRequests = friendRequests => ({
  type: SET_FRIEND_REQUESTS,
  payload: {
    friendRequests,
  },
});

export const GET_FRIENDS = 'friends:GET_FRIENDS';
/**
 * @returns {Object}
 */
export const getFriends = () => ({
  type: GET_FRIENDS,
});

export const SET_FRIENDS = 'friends:SET_FRIENDS';
/**
 * @param {Object} friends
 * @returns {Object}
 */
export const setFriends = friends => ({
  type: SET_FRIENDS,
  payload: {
    friends,
  },
});

export const MAKE_FRIEND_REQUEST = 'friends:MAKE_FRIEND_REQUEST';
/**
 * @param {String} email
 * @returns {Object}
 */
export const makeFriendRequest = email => ({
  type: MAKE_FRIEND_REQUEST,
  payload: {
    email,
  },
});

export const ACCEPT_FRIEND_REQUEST = 'friends:ACCEPT_FRIEND_REQUEST';
/**
 * @param {String} email
 * @returns {Object}
 */
export const acceptFriendRequest = email => ({
  type: ACCEPT_FRIEND_REQUEST,
  payload: {
    email,
  },
});

export const DECLINE_FRIEND_REQUEST = 'friends:DECLINE_FRIEND_REQUEST';
/**
 * @param {String} email
 * @returns {Object}
 */
export const declineFriendRequest = email => ({
  type: DECLINE_FRIEND_REQUEST,
  payload: {
    email,
  },
});
