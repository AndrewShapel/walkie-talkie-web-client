import React from 'react';

import { USER_STATUS } from '../../../../constants/user';

import User from '../../../user/user';

import panelRequestsClassNames from './panel-requests-item.css';

export default class PanelRequestsItem extends React.PureComponent {

  static propTypes = {
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    onSelect: null,
  };

  render() {
    return (
      <li className={panelRequestsClassNames['panel-requests-item']}>
        <User
          userNameClassName={panelRequestsClassNames['panel-requests-item__user-name']}
          userStatusClassName={panelRequestsClassNames['panel-requests-item__user-status']}
          userStatus={USER_STATUS.ONLINE}
          userName="Just Friend"
          userStatusName="Online"
        />
      </li>
    );
  }
}
