import React from 'react';

import { INPUT_TYPES, BUTTON_TYPES } from '../../../constants/form';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignInClassNames from './verification-sign-in.css';

export default class VerificationSignIn extends React.PureComponent {

  static propTypes = {
    validations: React.PropTypes.object.isRequired,
  };

  static onValidSubmit() {
    // Submit
  }

  /**
   * @param {Object} model
   */
  formModel = model => ({
    email: model.email,
    password: model.password,
  });

  render() {
    const { validations } = this.props;

    return (
      <Form mapping={this.formModel} onValidSubmit={VerificationSignIn.onValidSubmit}>
        <FormInput
          className={verificationSignInClassNames['verification-sign-in__form-input']}
          name="email"
          placeholder="Email"
          validations={validations.email.types}
          validationErrors={validations.email.errors}
          required
        />
        <FormInput
          className={verificationSignInClassNames['verification-sign-in__form-input']}
          name="password"
          placeholder="Password"
          type={INPUT_TYPES.password}
          required
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
