import React from 'react';

import { BUTTON_TYPES } from '../../../constants/common';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignInClassNames from '../../../assets/css/blocks/verification/verification-sign-in/verification-sign-in.css';

export default class VerificationSignIn extends React.PureComponent {
  static onSubmit(model) {
    console.log(model);
  }

  constructor(props) {
    super(props);

    this.formModel = inputs => ({
      email: inputs.email,
      password: inputs.password,
    });
  }

  render() {
    return (
      <Form mapping={this.formModel} onSubmit={VerificationSignIn.onSubmit}>
        <FormInput
          className={verificationSignInClassNames['verification-sign-in__form-input']}
          name="email"
          placeholder="Email"
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
