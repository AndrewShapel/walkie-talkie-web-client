import React from 'react';

import Verification from '../components/verification/verification';

import verificationClassNames from '../assets/css/containers/user-verification/user-verification.css';

const VerificationContainer = ({ match }) => (
  <div className={verificationClassNames['user-verification']}>
    <Verification match={match} className={verificationClassNames['user-verification__content']} />
  </div>
);

VerificationContainer.propTypes = {
  match: React.PropTypes.object,
};

VerificationContainer.defaultProps = {
  match: {},
};

export default VerificationContainer;
