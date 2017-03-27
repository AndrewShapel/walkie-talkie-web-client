import React from 'react';

import { USER_STATUS } from '../../constants/common';

import UserAvatar from '../user/user-avatar/user-avatar';

import panelClassNames from '../../assets/css/blocks/panel/panel.css';

export default () => (
  <div className={panelClassNames.panel}>
    <UserAvatar userStatus={USER_STATUS.ONLINE} />
  </div>
);
