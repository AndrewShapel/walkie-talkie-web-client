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

/**
 * @const
 * @type {Object}
 */
export const VALIDATIONS = {
  email: {
    types: {
      [FORM_VALIDATIONS.isEmail.type]: true,
    },
    errors: {
      [FORM_VALIDATIONS.isEmail.type]: FORM_VALIDATIONS.isEmail.errorMessage,
    },
  },
  firstLastName: {
    types: {
      [FORM_VALIDATIONS.isAlpha.type]: true,
    },
    errors: {
      [FORM_VALIDATIONS.isAlpha.type]: FORM_VALIDATIONS.isAlpha.errorMessage,
    },
  },
  passwordRepeat: {
    types: {
      [FORM_VALIDATIONS.isEqualsField.type]: 'password',
    },
    errors: {
      [FORM_VALIDATIONS.isEqualsField.type]: 'Password does not match',
    },
  },
};
