import React from 'react';
import autobind from 'autobind-decorator';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { INPUT_TYPES, BUTTON_TYPES } from '../../../constants/form';

import { signIn } from '../../../action-types/users';
import { setMessages } from '../../../action-types/messages';

import VerificationActions from '../verification-actions';
import VerificationUtils from '../verification-utils';

import Form from '../../form/form';
import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignInClassNames from './verification-sign-in.css';

/**
 * @param {Object} Messages
 */
const mapStateToProps = ({ Messages }) => ({
  messages: Messages,
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signInAction: signIn,
    setMessagesAction: setMessages,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class VerificationSignIn extends React.PureComponent {

  static propTypes = {
    validations: React.PropTypes.object.isRequired,
    messages: React.PropTypes.object.isRequired,
    signInAction: React.PropTypes.func.isRequired,
    setMessagesAction: React.PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    const { messages, setMessagesAction } = this.props;

    VerificationActions.clearMessages(messages, setMessagesAction);
  }

  @autobind
  onSubmit() {
    const { messages, setMessagesAction } = this.props;

    VerificationActions.clearMessages(messages, setMessagesAction);
  }

  /**
   * @param {Object} data
   */
  @autobind
  onValidSubmit(data) {
    const { signInAction } = this.props;

    const { email, password } = data;
    signInAction(email, password);

    VerificationUtils.resetForm(this.form);
  }

  /**
   * @param {Object} model
   */
  formModel = model => ({
    email: model.email,
    password: model.password,
  });

  render() {
    const { validations, messages } = this.props;

    const convertedMessages = VerificationUtils.convertMessages(messages);

    return (
      <Form
        mapping={this.formModel}
        errorMessages={convertedMessages}
        onSubmit={this.onSubmit}
        onValidSubmit={this.onValidSubmit}
        ref={(node) => { this.form = node; }}
      >
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
