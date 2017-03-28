import React from 'react';

import { USER_STATUS } from '../../../constants/common';

import User from '../../user/user';
import Svg from '../../svg/svg';
import Dropdown from '../../dropdowns/dropdown/dropdown';

import panelHeaderClassNames from '../../../assets/css/blocks/panel/panel-header/panel-header.css';

export default () => (
  <div className={panelHeaderClassNames['panel-header']}>
    <User
      className={panelHeaderClassNames['panel-header__user']}
      userNameClassName={panelHeaderClassNames['panel-header__user-name']}
      userStatusClassName={panelHeaderClassNames['panel-header__user-status']}
      userStatus={USER_STATUS.ONLINE}
      userName="Andrew Shapel"
      userStatusName="Online"
    />
    <div className={panelHeaderClassNames['panel-header__icons']}>
      <Dropdown className={panelHeaderClassNames['panel-header__dropdown']}>
        <Svg className={panelHeaderClassNames['panel-header__add-friend']} path="assets/icons/svg/user-plus.svg" />
      </Dropdown>
      <Svg className={panelHeaderClassNames['panel-header__settings']} path="assets/icons/svg/cog.svg" />
    </div>
  </div>
);
