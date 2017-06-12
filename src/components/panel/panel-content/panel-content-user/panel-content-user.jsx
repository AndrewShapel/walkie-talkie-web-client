import React from 'react';

import User from '../../../user/user';

import panelContentUserClassNames from './panel-content-user.css';

export default class PanelContentUser extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    user: React.PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, user } = this.props;

    return (
      <User
        className={className}
        userNameClassName={panelContentUserClassNames['panel-content-user__name']}
        userStatusClassName={panelContentUserClassNames['panel-content-user__status']}
        user={user}
      />
    );
  }
}
