import React from 'react';

import Verification from '../components/verification/verification';

import verificationClassNames from '../assets/css/containers/user-verification/user-verification.css';

export default class VerificationContainer extends React.Component {

  static propTypes = {
    match: React.PropTypes.object,
  }

  static defaultProps = {
    match: {},
  }

  render() {
    const { match } = this.props;
    return (
      <div className={verificationClassNames['user-verification']}>
        <Verification match={match} className={verificationClassNames['user-verification__content']} />
      </div>
    );
  }
}
