import React from 'react';

import callActionsClassNames from '../../assets/css/blocks/call-actions/call-actions.css';

export default () => (
  <div className={callActionsClassNames['call-actions']}>
    <div className={callActionsClassNames['call-actions__action']}>
      <object className={callActionsClassNames['call-actions__icon']} data="assets/icons/svg/video-camera.svg" type="image/svg+xml" />
    </div>
    <div className={callActionsClassNames['call-actions__action']}>
      <object className={callActionsClassNames['call-actions__icon']} data="assets/icons/svg/phone.svg" type="image/svg+xml" />
    </div>
  </div>
);
