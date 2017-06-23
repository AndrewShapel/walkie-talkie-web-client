import React from 'react';

import User from '../../../user/user';

import panelContentUserClassNames from './panel-content-user.css';

export default class PanelContentUser extends React.PureComponent {

  static propTypes = Object.assign({}, User.propTypes);

  static defaultProps = Object.assign({}, User.defaultProps);

  render() {
    const { className, user, isShort } = this.props;

    return (
      <User
        className={className}
        userNameClassName={panelContentUserClassNames['panel-content-user__name']}
        userStatusClassName={panelContentUserClassNames['panel-content-user__status']}
        user={user}
        isShort={isShort}
      />
    );
  }
}
