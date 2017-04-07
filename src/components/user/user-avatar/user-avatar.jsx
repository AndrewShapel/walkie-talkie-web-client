import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { USER_STATUS } from '../../../constants/user';

import Spinner from '../../../components/spinner/spinner';

import userAvatarClassNames from './user-avatar.css';

export default class UserAvatar extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    userStatusClassName: React.PropTypes.string,
    spinnerClassName: React.PropTypes.string,
    children: React.PropTypes.oneOfType(([
      React.PropTypes.element,
      React.PropTypes.array,
    ])),
    userStatus: React.PropTypes.string,
    isActive: React.PropTypes.bool,
    isLoad: React.PropTypes.bool,
    onMouseOver: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    userStatusClassName: '',
    spinnerClassName: '',
    children: null,
    userStatus: '',
    isActive: false,
    isLoad: false,
    onMouseOver: null,
    onMouseLeave: null,
  };

  /**
   * @param {String} userStatus
   * @param {String} userStatusClassName
   * @returns {Object}
   */
  static renderStatus(userStatus, userStatusClassName) {
    const statusClassName = classnames(userAvatarClassNames['user-avatar__status'], userStatusClassName);
    const statusIconClassName = classnames(userAvatarClassNames['user-avatar__status-icon'], {
      [userAvatarClassNames['user-avatar__status-icon_online']]: userStatus === USER_STATUS.ONLINE,
      [userAvatarClassNames['user-avatar__status-icon_offline']]: userStatus === USER_STATUS.OFFLINE,
      [userAvatarClassNames['user-avatar__status-icon_do_not_disturb']]: userStatus === USER_STATUS.DO_NOT_DISTURB,
    });

    return (
      <div className={statusClassName}>
        <div className={statusIconClassName} />
      </div>
    );
  }

  @autobind
  onMouseOver() {
    const { onMouseOver } = this.props;

    if (onMouseOver) {
      onMouseOver();
    }
  }

  @autobind
  onMouseLeave() {
    const { onMouseLeave } = this.props;

    if (onMouseLeave) {
      onMouseLeave();
    }
  }

  render() {
    const { className, userStatusClassName, spinnerClassName, children, userStatus, isActive, isLoad } = this.props;

    const avatarSpinnerClassName = classnames(userAvatarClassNames['user-avatar__spinner'], spinnerClassName);
    const avatarClassName = classnames(userAvatarClassNames['user-avatar'], {
      [userAvatarClassNames['user-avatar_active']]: isActive,
    }, className);

    const spinner = (isLoad) ? <Spinner className={avatarSpinnerClassName} /> : null;

    return (
      <div className={avatarClassName} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        { spinner }
        { children }
        { userStatus && UserAvatar.renderStatus(userStatus, userStatusClassName) }
      </div>
    );
  }
}
