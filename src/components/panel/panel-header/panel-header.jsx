import React from 'react';

import { USER_STATUS } from '../../../constants/common';

import User from '../../user/user';
import Svg from '../../svg/svg';
import DropdownItems from '../../dropdowns/dropdown-items/dropdown-items';

import panelHeaderClassNames from '../../../assets/css/blocks/panel/panel-header/panel-header.css';

export default () => {
  const dropdownItems = [{
    id: 0,
    title: 'Option 1',
  }, {
    id: 1,
    title: 'Option 2',
  }];

  return (
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
        <DropdownItems
          className={panelHeaderClassNames['panel-header__dropdown']}
          itemsClassName={panelHeaderClassNames['panel-header__dropdown-items']}
          items={dropdownItems}
        >
          <Svg className={panelHeaderClassNames['panel-header__add-friend']} path="assets/icons/svg/user-plus.svg" />
        </DropdownItems>
        <Svg className={panelHeaderClassNames['panel-header__settings']} path="assets/icons/svg/cog.svg" />
      </div>
    </div>
  );
};
