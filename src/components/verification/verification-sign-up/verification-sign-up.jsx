import React from 'react';

import { INPUT_TYPES, BUTTON_TYPES, FORM_VALIDATIONS } from '../../../constants/common';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignUpClassNames from '../../../assets/css/blocks/verification/verification-sign-up/verification-sign-up.css';

export default class VerificationSignUp extends React.PureComponent {
  static onValidSubmit(model) {
    console.log(model);
  }

  constructor(props) {
    super(props);

    this.inputValidators = {
      email: {
        types: {
          [FORM_VALIDATIONS.isEmail.type]: true,
        },
      },
      passwordRepeat: {
        types: {
          [FORM_VALIDATIONS.isEqualsField.type]: 'password',
        },
      },
    };

    this.inputValidatorsErrors = {
      email: {
        errors: {
          [FORM_VALIDATIONS.isEmail.type]: FORM_VALIDATIONS.isEmail.errorMessage,
        },
      },
      passwordRepeat: {
        errors: {
          [FORM_VALIDATIONS.isEqualsField.type]: 'Cus',
        },
      },
    };

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
    return (
      <Form mapping={this.formModel} onValidSubmit={VerificationSignUp.onValidSubmit}>
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="email"
          placeholder="Email"
          validations={this.inputValidators.email.types}
          validationErrors={this.inputValidatorsErrors.email.errors}
          required
        />
        <FormInput
          className={verificationSignUpClassNames['verification-sign-up__form-input']}
          name="firstName"
          placeholder="First Name"
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
          validations={this.inputValidators.passwordRepeat.types}
          validationErrors={this.inputValidatorsErrors.email.errors}
          type={INPUT_TYPES.password}
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
