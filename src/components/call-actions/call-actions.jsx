import React from 'react';

import { ICONS } from '../../constants/icons';

import Svg from '../svg/svg';

import callActionsClassNames from '../../assets/css/blocks/call-actions/call-actions.css';

export default () => (
  <div className={callActionsClassNames['call-actions']}>
    <div className={callActionsClassNames['call-actions__action']}>
      <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.VIDEO_CAMERA} />
    </div>
    <div className={callActionsClassNames['call-actions__action']}>
      <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PHONE} />
    </div>
  </div>
);
