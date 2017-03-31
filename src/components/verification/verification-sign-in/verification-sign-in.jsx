import React from 'react';

import { INPUT_TYPES, BUTTON_TYPES } from '../../../constants/common';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignInClassNames from '../../../assets/css/blocks/verification/verification-sign-in/verification-sign-in.css';

class VerificationSignIn extends React.PureComponent {
  static onValidSubmit() {
    // Submit
  }

  constructor(props) {
    super(props);

    /**
     * @param {Object} model
     */
    this.formModel = model => ({
      email: model.email,
      password: model.password,
    });
  }

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

VerificationSignIn.propTypes = {
  validations: React.PropTypes.object.isRequired,
};

export default VerificationSignIn;
