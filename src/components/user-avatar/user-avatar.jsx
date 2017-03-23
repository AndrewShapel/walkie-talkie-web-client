import React from 'react';
import classnames from 'classnames';

import { USER_STATUS } from '../../constants/common';

import userAvatarClassNames from '../../assets/css/blocks/user-avatar/user-avatar.css';

const UserAvatar = ({ userStatus }) => {
  const statusIconClassName = classnames(userAvatarClassNames['user-avatar__status-icon'], {
    [userAvatarClassNames['user-avatar__status-icon_online']]: userStatus === USER_STATUS.ONLINE,
    [userAvatarClassNames['user-avatar__status-icon_offline']]: userStatus === USER_STATUS.OFFLINE,
    [userAvatarClassNames['user-avatar__status-icon_do_not_disturb']]: userStatus === USER_STATUS.DO_NOT_DISTURB,
  });

  return (
    <div className={userAvatarClassNames['user-avatar']}>
      <div className={userAvatarClassNames['user-avatar__status']}>
        <div className={statusIconClassName} />
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  userStatus: React.PropTypes.string.isRequired,
};

export default UserAvatar;
