import React from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import User from '../../../../models/users/user';

import PanelContentUser from '../../panel-content/panel-content-user/panel-content-user';
import Badge from '../../../badge/badge';

import panelFriendsItemClassNames from './panel-friends-item.css';

export default class PanelFriendsItem extends React.PureComponent {

  static propTypes = {
    user: React.PropTypes.instanceOf(User),
    isActive: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    user: new User(),
    isActive: false,
    onSelect: null,
  };

  @autobind
  onClick() {
    const { user, onSelect } = this.props;

    if (onSelect) {
      onSelect(user);
    }
  }

  render() {
    const { isActive } = this.props;

    const friendsItemClassName = classnames(panelFriendsItemClassNames['panel-friends-item'], {
      [panelFriendsItemClassNames['panel-friends-item_active']]: isActive,
    });

    return (
      <li className={friendsItemClassName} onClick={this.onClick}>
        <PanelContentUser />
        <Badge count={3} isInvert={!isActive} />
      </li>
    );
  }
}
