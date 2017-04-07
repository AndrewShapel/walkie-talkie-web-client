import React from 'react';
import classnames from 'classnames';

import UserAvatar from './user-avatar/user-avatar';
import UserInformation from './user-information/user-information';

import userClassNames from './user.css';

const User = ({ className, userNameClassName, userStatusClassName, userStatus, userName, userStatusName }) => {
  const userClassName = classnames(userClassNames.user, className);

  return (
    <div className={userClassName}>
      <UserAvatar
        userStatusClassName={userStatusClassName}
        userStatus={userStatus}
      />
      <UserInformation
        className={userClassNames['user__user-information']}
        userNameClassName={userNameClassName}
        userName={userName}
        userStatus={userStatusName}
      />
    </div>
  );
};

User.defaultProps = Object.assign(UserAvatar.defaultProps, UserInformation.defaultProps, {
  className: '',
});

User.propTypes = Object.assign(UserAvatar.propTypes, UserInformation.propTypes, {
  className: React.PropTypes.string,
});

export default User;

