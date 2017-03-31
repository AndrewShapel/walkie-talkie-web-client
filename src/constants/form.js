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
