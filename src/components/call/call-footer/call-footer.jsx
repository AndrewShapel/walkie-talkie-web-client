import React from 'react';

import CallActions from '../call-actions/call-actions';

import callFooterClassNames from '../call-footer/call-footer.css';

export default () => (
  <CallActions
    className={callFooterClassNames['call-footer']}
    actionClassName={callFooterClassNames['call-footer__action']}
    isMute
  />
);
