import React from 'react';

import Verification from '../components/verification/verification';

import verificationClassNames from '../assets/css/containers/user-verification/user-verification.css';

export default () => (
  <div className={verificationClassNames['user-verification']}>
    <Verification className={verificationClassNames['user-verification__content']} />
  </div>
);
