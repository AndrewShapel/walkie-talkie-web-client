export const SIGN_IN = 'users:SIGN_IN';
/**
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
export const signIn = (email, password) => ({
  type: SIGN_IN,
  payload: {
    email,
    password,
  },
});

export const SIGN_UP = 'users:SIGN_UP';
/**
 * @param {String} email
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} password
 * @returns {Object}
 */
export const signUp = (email, firstName, lastName, password) => ({
  type: SIGN_UP,
  payload: {
    email,
    firstName,
    lastName,
    password,
  },
});

export const LOG_OUT = 'users:LOG_OUT';
/**
 * @returns {Object}
 */
export const logOut = () => ({
  type: LOG_OUT,
});

export const SET_ACCOUNT = 'users:SET_ACCOUNT';
/**
 * @param {String} id
 * @param {String} email
 * @returns {Object}
 */
export const setAccount = (id, email) => ({
  type: SET_ACCOUNT,
  payload: {
    id,
    email,
  },
});

export const SET_ACCOUNT_PERMISSION = 'users:SET_ACCOUNT_PERMISSION';
/**
 * @param {String} accountPermission
 * @returns {Object}
 */
export const setAccountPermission = accountPermission => ({
  type: SET_ACCOUNT_PERMISSION,
  payload: {
    accountPermission,
  },
});

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

export const GET_USERS = 'users:GET_USERS';
/**
 * @returns {Object}
 */
export const getUsers = () => ({
  type: GET_USERS,
});

export const SET_USERS = 'users:SET_USERS';
/**
 * @param {Object} users
 * @returns {Object}
 */
export const setUsers = users => ({
  type: SET_USERS,
  payload: {
    users,
  },
});
