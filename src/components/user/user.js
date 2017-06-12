import React from 'react';
import classnames from 'classnames';

import { USER_STATUS } from '../../constants/user';

import UserAvatar from './user-avatar/user-avatar';
import UserInformation from './user-information/user-information';

import userClassNames from './user.css';

export default class User extends React.PureComponent {

  static propTypes = Object.assign({}, UserAvatar.propTypes, UserInformation.propTypes, {
    className: React.PropTypes.string,
    user: React.PropTypes.object.isRequired,
  });

  static defaultProps = Object.assign({}, UserAvatar.defaultProps, UserInformation.defaultProps, {
    className: '',
  });

  /**
   * @param {String} status
   * @returns {String}
   */
  static getStatusName(status) {
    switch (status) {
      case USER_STATUS.ONLINE:
        return 'Online';
      case USER_STATUS.OFFLINE:
        return 'Offline';
      case USER_STATUS.DO_NOT_DISTURB:
        return 'Do not desturb';
      default:
        return '';
    }
  }

  render() {
    const { className, userNameClassName, userStatusClassName, user } = this.props;

    const userClassName = classnames(userClassNames.user, className);

    const userStatus = user.getStatus();
    const userName = user.getFullName();
    const userStatusName = User.getStatusName(userStatus);

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
  }
}
