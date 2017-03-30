import React from 'react';

import FormInput from '../../form/form-input/form-input';
import Button from '../../button/button';

import verificationSignInClassNames from '../../../assets/css/blocks/verification/verification-sign-in/verification-sign-in.css';

export default () => (
  <div>
    <FormInput className={verificationSignInClassNames['verification-sign-in__form-input']} placeholder="Email" />
    <FormInput className={verificationSignInClassNames['verification-sign-in__form-input']} placeholder="Password" />
    <Button className={verificationSignInClassNames['verification-sign-in__button']} title="Login" />
  </div>
);
