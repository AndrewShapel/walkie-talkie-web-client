import React from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import { ICONS } from '../../../../constants/icons';

import Svg from '../../../svg/svg';
import PanelContentUser from '../../panel-content/panel-content-user/panel-content-user';

import panelRequestsClassNames from './panel-requests-item.css';

export default class PanelRequestsItem extends React.PureComponent {

  static propTypes = Object.assign({}, PanelContentUser.propTypes, {
    className: React.PropTypes.string,
    onDecline: React.PropTypes.func,
    onAccept: React.PropTypes.func,
    isDisabled: React.PropTypes.bool,
  });

  static defaultProps = Object.assign({}, PanelContentUser.defaultProps, {
    className: '',
    onDecline: null,
    onAccept: null,
    isDisabled: false,
  });

  @autobind
  onDecline() {
    const { user, onDecline } = this.props;

    if (onDecline) {
      onDecline(user);
    }
  }

  @autobind
  onAccept() {
    const { user, onAccept } = this.props;

    if (onAccept) {
      onAccept(user);
    }
  }

  /**
   * @returns {Object}
   */
  renderIcons() {
    const iconClassName = panelRequestsClassNames['panel-requests-item__icon'];
    const iconBlockedClassName = classnames(iconClassName, panelRequestsClassNames['panel-requests-item__icon_block']);
    const iconAcceptClassName = classnames(iconClassName, panelRequestsClassNames['panel-requests-item__icon_accept']);

    return (
      <div className={panelRequestsClassNames['panel-requests-item__icons']}>
        <Svg
          className={iconBlockedClassName}
          icon={ICONS.BLOCKED}
          onClick={this.onDecline}
        />
        <Svg
          className={iconAcceptClassName}
          icon={ICONS.USER_CHECK}
          onClick={this.onAccept}
        />
      </div>
    );
  }

  render() {
    const { className, user, isDisabled } = this.props;

    const icons = (!isDisabled)
      ? this.renderIcons()
      : null;

    return (
      <li className={className}>
        <PanelContentUser user={user} isShort />
        {icons}
      </li>
    );
  }
}
