import React from 'react';
import classnames from 'classnames';

import { USER_STATUS } from '../../../../constants/common';

import User from '../../../user/user';
import Badge from '../../../badge/badge';

import panelFriendsItemClassNames from '../../../../assets/css/blocks/panel/panel-friends/panel-friends-item/panel-friends-item.css';

const PanelFriendsItem = ({ isActive }) => {
  const friendsItemClassName = classnames(panelFriendsItemClassNames['panel-friends-item'], {
    [panelFriendsItemClassNames['panel-friends-item_active']]: isActive,
  });

  return (
    <li className={friendsItemClassName}>
      <User
        userNameClassName={panelFriendsItemClassNames['panel-friends-item__user-name']}
        userStatusClassName={panelFriendsItemClassNames['panel-friends-item__user-status']}
        userStatus={USER_STATUS.ONLINE}
        userName="Just Friend"
        userStatusName="Online"
      />
      <Badge count={3} isInvert={!isActive} />
    </li>
  );
};

PanelFriendsItem.defaultProps = {
  isActive: false,
};

PanelFriendsItem.propTypes = {
  isActive: React.PropTypes.bool,
};

export default PanelFriendsItem;

