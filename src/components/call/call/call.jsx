import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { ICONS } from '../../../constants/icons';

import UserAvatar from '../../user/user-avatar/user-avatar';
import Svg from '../../svg/svg';

import callClassNames from './call.css';

export default class Call extends React.PureComponent {
  state = {
    isKickActionShow: false,
  };

  @autobind
  onMouseOver() {
    const { isKickActionShow } = this.state;

    if (!isKickActionShow) {
      this.setState({
        isKickActionShow: true,
      });
    }
  }

  @autobind
  onMouseLeave() {
    const { isKickActionShow } = this.state;

    if (isKickActionShow) {
      this.setState({
        isKickActionShow: false,
      });
    }
  }

  render() {
    const { isKickActionShow } = this.state;

    const kickIconClassName = classnames(callClassNames['call__kick-icon'], {
      [callClassNames['call__kick-icon_hide']]: !isKickActionShow,
    });

    return (
      <div className={callClassNames.call}>
        <UserAvatar
          className={callClassNames['call__user-avatar']}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          <Svg className={kickIconClassName} icon={ICONS.POWER_OFF} />
        </UserAvatar>
        <span className={callClassNames['call__user-name']}>Andrew Shapel</span>
      </div>
    );
  }
}
