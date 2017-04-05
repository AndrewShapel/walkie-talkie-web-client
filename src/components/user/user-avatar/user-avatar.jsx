import React from 'react';
import classnames from 'classnames';

import { USER_STATUS } from '../../../constants/user';

import userAvatarClassNames from '../../../assets/css/blocks/user/user-avatar/user-avatar.css';

export default class UserAvatar extends React.PureComponent {
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

  render() {
    const { className, userStatus, userStatusClassName } = this.props;

    const avatarClassName = classnames(userAvatarClassNames['user-avatar'], className);

    return (
      <div className={avatarClassName}>
        { userStatus && UserAvatar.renderStatus(userStatus, userStatusClassName) }
      </div>
    );
  }
}

UserAvatar.defaultProps = {
  className: '',
  userStatus: '',
  userStatusClassName: '',
};

UserAvatar.propTypes = {
  className: React.PropTypes.string,
  userStatus: React.PropTypes.string,
  userStatusClassName: React.PropTypes.string,
};

