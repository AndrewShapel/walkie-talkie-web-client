import React from 'react';
import classnames from 'classnames';

import { USER_STATUS } from '../../../constants/common';

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
    const { userStatus, userStatusClassName } = this.props;

    return (
      <div className={userAvatarClassNames['user-avatar']}>
        { userStatus && UserAvatar.renderStatus(userStatus, userStatusClassName) }
      </div>
    );
  }
}

UserAvatar.defaultProps = {
  userStatus: '',
  userStatusClassName: '',
};

UserAvatar.propTypes = {
  userStatus: React.PropTypes.string,
  userStatusClassName: React.PropTypes.string,
};

