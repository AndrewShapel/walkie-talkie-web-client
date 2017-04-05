import React from 'react';

import { Route } from 'react-router-dom';

import routes from '../../../constants/routes/routes';
import { VALIDATIONS } from '../../../constants/form';

import VerificationSignIn from '../verification-sign-in/verification-sign-in';
import VerificationSignUp from '../verification-sign-up/verification-sign-up';

import verificationContentClassNames from '../../../assets/css/blocks/verification/verification-content/verification-content.css';

export default class VerificationContent extends React.PureComponent {

  static propTypes = {
    match: React.PropTypes.object,
  };

  static defaultProps = {
    match: {},
  };

  render() {
    const { match } = this.props;
    return (
      <div className={verificationContentClassNames['verification-content']}>
        <Route exact path={`${match.path}${routes.userVerification.url.signin}`} render={() => <VerificationSignIn validations={VALIDATIONS} />} />
        <Route exact path={`${match.path}${routes.userVerification.url.signup}`} render={() => <VerificationSignUp validations={VALIDATIONS} />} />
      </div>
    );
  }
}
