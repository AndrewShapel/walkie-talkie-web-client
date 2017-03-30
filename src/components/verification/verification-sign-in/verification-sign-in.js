import React from 'react';

import Input from '../../input/input';

import verificationSignInClassNames from '../../../assets/css/blocks/verification/verification-sign-in/verification-sign-in.css';

export default () => (
  <Input
    inputClassName={verificationSignInClassNames['verification-sign-in__form-input']}
    placeholder="Login"
  />
);
