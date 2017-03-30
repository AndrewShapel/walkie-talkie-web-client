/**
 * @const
 * @type {Object}
 */
export const USER_STATUS = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  DO_NOT_DISTURB: 'DO_NOT_DISTURB',
};

/**
 * @const
 * @type {Object}
 */
export const VERIFICATION_TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

/**
 * @const
 * @type {Array}
 */
export const VERIFICATION_ITEMS = [{
  type: VERIFICATION_TYPES.SIGN_IN,
  title: 'Sign in',
}, {
  type: VERIFICATION_TYPES.SIGN_UP,
  title: 'Sign up',
}];

