import React from 'react';
import classnames from 'classnames';

import userInformationClassNames from './user-information.css';

const userInformation = ({ className, userNameClassName, userName, userStatus }) => {
  const userInformationClassName = classnames(userInformationClassNames['user-information'], className);
  const nameClassName = classnames(userInformationClassNames['user-information__user-name'], userNameClassName);

  return (
    <div className={userInformationClassName}>
      <span className={nameClassName}>{userName}</span>
      <span className={userInformationClassNames['user-information__user-status']}>{userStatus}</span>
    </div>
  );
};

userInformation.defaultProps = {
  className: '',
  userNameClassName: '',
  userName: '',
  userStatus: '',
};

userInformation.propTypes = {
  className: React.PropTypes.string,
  userNameClassName: React.PropTypes.string,
  userName: React.PropTypes.string,
  userStatus: React.PropTypes.string,
};

export default userInformation;
