import React from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import User from '../../../../models/users/user';

import { ICONS } from '../../../../constants/icons';

import Svg from '../../../svg/svg';
import PanelContentUser from '../../panel-content/panel-content-user/panel-content-user';

import panelRequestsClassNames from './panel-requests-item.css';

export default class PanelRequestsItem extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    user: React.PropTypes.instanceOf(User),
    onBlock: React.PropTypes.func,
    onAccept: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    user: new User(),
    onBlock: null,
    onAccept: null,
  };

  @autobind
  onBlock() {
    const { user, onBlock } = this.props;

    if (onBlock) {
      onBlock(user);
    }
  }

  @autobind
  onAccept() {
    const { user, onAccept } = this.props;

    if (onAccept) {
      onAccept(user);
    }
  }

  render() {
    const { className } = this.props;

    const iconClassName = panelRequestsClassNames['panel-requests-item__icon'];
    const iconBlockedClassName = classnames(iconClassName, panelRequestsClassNames['panel-requests-item__icon_block']);
    const iconAcceptClassName = classnames(iconClassName, panelRequestsClassNames['panel-requests-item__icon_accept']);

    return (
      <li className={className}>
        <PanelContentUser />
        <div className={panelRequestsClassNames['panel-requests-item__icons']}>
          <Svg
            className={iconBlockedClassName}
            icon={ICONS.BLOCKED}
            onClick={this.onBlock}
          />
          <Svg
            className={iconAcceptClassName}
            icon={ICONS.USER_CHECK}
            onClick={this.onAccept}
          />
        </div>
      </li>
    );
  }
}
