import React from 'react';

import { ICONS } from '../../../constants/icons';
import { USER_STATUS } from '../../../constants/user';

import User from '../../user/user';
import Svg from '../../svg/svg';
import DropdownAddToFriends from '../../dropdown/dropdown-add-to-friends/dropdown-add-to-friends';

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
      <DropdownAddToFriends itemsClassName={panelHeaderClassNames['panel-header__dropdown-items']}>
        <Svg className={panelHeaderClassNames['panel-header__add-friend']} icon={ICONS.USER_PLUS} />
      </DropdownAddToFriends>
      <Svg className={panelHeaderClassNames['panel-header__settings']} icon={ICONS.COG} />
    </div>
  </div>
);

