import React from 'react';
import classnames from 'classnames';

import { USER_STATUS } from '../../../../constants/user';

import User from '../../../user/user';
import Badge from '../../../badge/badge';

import panelFriendsItemClassNames from './panel-friends-item.css';

export default class PanelFriendsItem extends React.PureComponent {

  static propTypes = {
    isActive: React.PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    const { isActive } = this.props;

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
  }
}
