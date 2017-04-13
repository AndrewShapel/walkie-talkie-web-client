export const SIGN_IN = 'users:SIGN_IN';
/**
 * @param {String} email
 * @param {String} password
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

export const SET_ACCOUNT = 'users:SET_ACCOUNT';
/**
 * @param {String} id
 * @param {String} email
 */
export const setAccount = (id, email) => ({
  type: SET_ACCOUNT,
  payload: {
    id,
    email,
  },
});
