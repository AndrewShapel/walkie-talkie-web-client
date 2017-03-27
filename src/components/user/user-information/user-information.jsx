import React from 'react';
import classnames from 'classnames';

import userInformationClassNames from '../../../assets/css/blocks/user/user-information/user-information.css';

const userInformation = ({ className, userName, userStatus }) => {
  const userInformationClassName = classnames(userInformationClassNames['user-information'], className);

  return (
    <div className={userInformationClassName}>
      <span className={userInformationClassNames['user-information__user-name']}>{userName}</span>
      <span className={userInformationClassNames['user-information__user-status']}>{userStatus}</span>
    </div>
  );
};

userInformation.defaultProps = {
  className: '',
  userName: '',
  userStatus: '',
};

userInformation.propTypes = {
  className: React.PropTypes.string,
  userName: React.PropTypes.string,
  userStatus: React.PropTypes.string,
};

export default userInformation;
