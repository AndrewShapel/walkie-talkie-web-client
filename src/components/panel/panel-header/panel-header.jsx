import React from 'react';

import { ICONS } from '../../../constants/icons';
import { USER_STATUS } from '../../../constants/user';

import User from '../../user/user';
import Svg from '../../svg/svg';
import DropdownSearchUser from '../../dropdown/dropdown-search-user/dropdown-search-user';
import DropdownSettings from '../../dropdown/dropdown-settings/dropdown-settings';

import panelHeaderClassNames from './panel-header.css';

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
      <DropdownSearchUser itemsClassName={panelHeaderClassNames['panel-header__dropdown-items']}>
        <div className={panelHeaderClassNames['panel-header__icon']}>
          <Svg icon={ICONS.USER_PLUS} />
        </div>
      </DropdownSearchUser>
      <DropdownSettings>
        <div>
          <Svg className={panelHeaderClassNames['panel-header__icon']} icon={ICONS.COG} />
        </div>
      </DropdownSettings>
      <Svg className={panelHeaderClassNames['panel-header__icon']} icon={ICONS.EXIT} />
    </div>
  </div>
);

