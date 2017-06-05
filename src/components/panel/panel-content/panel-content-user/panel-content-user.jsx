import React from 'react';

import { USER_STATUS } from '../../../../constants/user';

import User from '../../../user/user';

import panelContentUserClassNames from './panel-content-user.css';

export default class PanelContentUser extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <User
        className={className}
        userNameClassName={panelContentUserClassNames['panel-content-user__name']}
        userStatusClassName={panelContentUserClassNames['panel-content-user__status']}
        userStatus={USER_STATUS.ONLINE}
        userName="Just Friend"
        userStatusName="Online"
      />
    );
  }
}
