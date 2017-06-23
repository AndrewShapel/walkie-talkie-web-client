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

export const SIGN_OUT = 'users:SIGN_OUT';
/**
 * @returns {Object}
 */
export const signOut = () => ({
  type: SIGN_OUT,
});

export const GET_ACCOUNT = 'users:GET_ACCOUNT';
/**
 * @returns {Object}
 */
export const getAccount = () => ({
  type: GET_ACCOUNT,
});

export const SET_ACCOUNT = 'users:SET_ACCOUNT';
/**
 * @param {String} email
 * @param {String} firstName
 * @param {String} lastName
 * @returns {Object}
 */
export const setAccount = (email, firstName, lastName) => ({
  type: SET_ACCOUNT,
  payload: {
    email,
    firstName,
    lastName,
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
