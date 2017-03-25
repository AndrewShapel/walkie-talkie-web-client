import React from 'react';

import Svg from '../svg/svg';

import callActionsClassNames from '../../assets/css/blocks/call-actions/call-actions.css';

export default () => (
  <div className={callActionsClassNames['call-actions']}>
    <div className={callActionsClassNames['call-actions__action']}>
      <Svg className={callActionsClassNames['call-actions__icon']} path="assets/icons/svg/video-camera.svg" />
    </div>
    <div className={callActionsClassNames['call-actions__action']}>
      <Svg className={callActionsClassNames['call-actions__icon']} path="assets/icons/svg/phone.svg" />
    </div>
  </div>
);
