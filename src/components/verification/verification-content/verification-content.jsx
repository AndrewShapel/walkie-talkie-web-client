import React from 'react';

import { Route } from 'react-router-dom';

import routes from '../../../constants/routes/routes';
import { FORM_VALIDATIONS } from '../../../constants/form';

import VerificationSignIn from '../verification-sign-in/verification-sign-in';
import VerificationSignUp from '../verification-sign-up/verification-sign-up';

import verificationContentClassNames from '../../../assets/css/blocks/verification/verification-content/verification-content.css';

export default class VerificationContent extends React.PureComponent {
  static propTypes = {
    match: React.PropTypes.object,
  }

  static defaultProps = {
    match: {},
  }

  constructor(props) {
    super(props);

    /**
     * @type {Object}
     */
    this.validations = {
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
  }

  render() {
    const { match } = this.props;
    return (
      <div className={verificationContentClassNames['verification-content']}>
        <Route exact path={`${match.path}${routes.userVerification.url.signin}`} render={() => <VerificationSignIn validations={this.validations} />} />
        <Route exact path={`${match.path}${routes.userVerification.url.signup}`} render={() => <VerificationSignUp validations={this.validations} />} />
      </div>
    );
  }
}
