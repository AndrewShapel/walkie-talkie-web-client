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

/**
 * @const
 * @type {Object}
 */
export const INPUT_TYPES = {
  text: 'text',
  password: 'password',
};

/**
 * @const
 * @type {Object}
 */
export const BUTTON_TYPES = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

/**
 * @const
 * @type {Object}
 */
export const FORM_VALIDATIONS = {
  isEmail: {
    type: 'isEmail',
    errorMessage: 'Email is invalid',
  },
  isAlpha: {
    type: 'isAlpha',
    errorMessage: 'Only letters without tabs allowed',
  },
  isEqualsField: {
    type: 'equalsField',
  },
};
