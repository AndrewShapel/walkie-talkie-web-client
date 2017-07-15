import React from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import User from '../../../../models/users/user';

import PanelContentUser from '../../panel-content/panel-content-user/panel-content-user';
import Badge from '../../../badge/badge';

import panelFriendsItemClassNames from './panel-friends-item.css';

export default class PanelFriendsItem extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    user: React.PropTypes.instanceOf(User),
    isActive: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
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
    const { className, user, isActive } = this.props;

    const friendsItemClassName = classnames(panelFriendsItemClassNames['panel-friends-item'], {
      [panelFriendsItemClassNames['panel-friends-item_active']]: isActive,
    }, className);

    return (
      <li className={friendsItemClassName} onClick={this.onClick}>
        <PanelContentUser user={user} />
        <Badge count={3} isInvert={!isActive} />
      </li>
    );
  }
}
