export const GET_FRIENDS = 'users:GET_FRIENDS';
/**
 * @returns {Object}
 */
export const getFriends = () => ({
  type: GET_FRIENDS,
});

export const SET_FRIENDS = 'users:SET_FRIENDS';
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

export const MAKE_FRIEND_REQUEST = 'users:MAKE_FRIEND_REQUEST';
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

export const ACCEPT_FRIEND_REQUEST = 'users:ACCEPT_FRIEND_REQUEST';
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

export const DECLINE_FRIEND_REQUEST = 'users:DECLINE_FRIEND_REQUEST';
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
