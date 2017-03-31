import React from 'react';

import { INPUT_TYPES, BUTTON_TYPES } from '../../../constants/common';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignUpClassNames from '../../../assets/css/blocks/verification/verification-sign-up/verification-sign-up.css';

class VerificationSignUp extends React.PureComponent {
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
      firstName: model.firstName,
      lastName: model.lastName,
      password: model.password,
    });
  }

  render() {
    const { validations } = this.props;

    return (
      <Form mapping={this.formModel} onValidSubmit={VerificationSignUp.onValidSubmit}>
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="email"
          placeholder="Email"
          validations={validations.email.types}
          validationErrors={validations.email.errors}
          required
        />
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="firstName"
          placeholder="First Name"
          validations={validations.firstLastName.types}
          validationErrors={validations.firstLastName.errors}
          required
        />
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="lastName"
          placeholder="Last name"
          required
        />
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="password"
          placeholder="Password"
          type={INPUT_TYPES.password}
          required
        />
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="passwordRepeat"
          placeholder="Repeat password"
          type={INPUT_TYPES.password}
          validations={validations.passwordRepeat.types}
          validationErrors={validations.passwordRepeat.errors}
          required
        />
        <Button
          className={verificationSignUpClassNames['verification-sign-up__button']}
          title="Register"
          type={BUTTON_TYPES.submit}
        />
      </Form>
    );
  }
}

VerificationSignUp.propTypes = {
  validations: React.PropTypes.object.isRequired,
};

export default VerificationSignUp;
