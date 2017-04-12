import React from 'react';
import autobind from 'autobind-decorator';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { INPUT_TYPES, BUTTON_TYPES } from '../../../constants/form';
import { MESSAGE_TARGETS } from '../../../constants/messages';

import { signUp } from '../../../action-types/users';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignUpClassNames from './verification-sign-up.css';

/**
 * @param {String} Messages
 * @return {Object}
 */
const mapStateToProps = ({ Messages }) => ({
  messages: Messages.getByTarget(MESSAGE_TARGETS.USERS),
});

/**
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signUpAction: signUp,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class VerificationSignUp extends React.PureComponent {

  static propTypes = {
    validations: React.PropTypes.object.isRequired,
    messages: React.PropTypes.object,
    signUpAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    messages: {},
  };

  /**
   * @param {Object} data
   */
  @autobind
  onValidSubmit(data) {
    const { signUpAction } = this.props;

    const { email, password } = data;
    signUpAction(email, '', '', password);
  }

  /**
   * @param {Object} model
   */
  formModel = model => ({
    email: model.email,
    firstName: model.firstName,
    lastName: model.lastName,
    password: model.password,
  });

  render() {
    const { validations } = this.props;

    return (
      <Form
        mapping={this.formModel}
        onValidSubmit={this.onValidSubmit}
        ref={(node) => { this.form = node; }}
      >
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
