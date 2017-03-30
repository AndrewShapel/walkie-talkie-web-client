import React from 'react';

import { FORM_VALIDATIONS, BUTTON_TYPES } from '../../../constants/common';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignInClassNames from '../../../assets/css/blocks/verification/verification-sign-in/verification-sign-in.css';

export default class VerificationSignIn extends React.PureComponent {
  static onValidSubmit(model) {
    console.log(model);
  }

  constructor(props) {
    super(props);

    this.inputValidators = {
      [FORM_VALIDATIONS.isEmail.type]: true,
    };

    this.inputValidatorsErrors = {
      [FORM_VALIDATIONS.isEmail.type]: FORM_VALIDATIONS.isEmail.errorMessage,
    };

    this.formModel = inputs => ({
      email: inputs.email,
      password: inputs.password,
    });
  }

  render() {
    return (
      <Form mapping={this.formModel} onValidSubmit={VerificationSignIn.onValidSubmit}>
        <FormInput
          className={verificationSignInClassNames['verification-sign-in__form-input']}
          name="email"
          placeholder="Email"
          validations={this.inputValidators}
          validationErrors={this.inputValidatorsErrors}
        />
        <FormInput
          className={verificationSignInClassNames['verification-sign-in__form-input']}
          name="password"
          placeholder="Password"
        />
        <Button
          className={verificationSignInClassNames['verification-sign-in__button']}
          title="Login"
          type={BUTTON_TYPES.submit}
        />
      </Form>
    );
  }
}
