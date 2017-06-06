import React from 'react';
import classnames from 'classnames';

import PanelContentUser from '../../panel-content/panel-content-user/panel-content-user';
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
        <PanelContentUser />
        <Badge count={3} isInvert={!isActive} />
      </li>
    );
  }
}
