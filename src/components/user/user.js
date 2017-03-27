import React from 'react';
import classnames from 'classnames';

import UserAvatar from './user-avatar/user-avatar';
import UserInformation from './user-information/user-information';

import userClassNames from '../../assets/css/blocks/user/user.css';

const User = ({ className, userInformationClassName, userStatus, userName, userStatusName }) => {
  const userClassName = classnames(userClassNames.user, className);

  return (
    <div className={userClassName}>
      <UserAvatar userStatus={userStatus} />
      <UserInformation
        className={userInformationClassName}
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

