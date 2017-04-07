import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { ICONS } from '../../../constants/icons';

import UserAvatar from '../../user/user-avatar/user-avatar';
import Svg from '../../svg/svg';

import callParticipantClassNames from './call-participant.css';

export default class CallParticipant extends React.PureComponent {

  state = {
    isKickAllow: false,
  };

  @autobind
  onMouseOver() {
    const { isKickAllow } = this.state;

    if (!isKickAllow) {
      this.setState({
        isKickAllow: true,
      });
    }
  }

  @autobind
  onMouseLeave() {
    const { isKickAllow } = this.state;

    if (isKickAllow) {
      this.setState({
        isKickAllow: false,
      });
    }
  }

  render() {
    const { isKickAllow } = this.state;

    const kickIconClassName = classnames(callParticipantClassNames['call-participant__kick-icon'], {
      [callParticipantClassNames['call-participant__kick-icon_hide']]: !isKickAllow,
    });

    return (
      <div className={callParticipantClassNames['call-participant']}>
        <UserAvatar
          className={callParticipantClassNames['call-participant__user-avatar']}
          spinnerClassName={callParticipantClassNames['call-participant__spinner']}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          <Svg className={kickIconClassName} icon={ICONS.POWER_OFF} />
        </UserAvatar>
        <span className={callParticipantClassNames['call-participant__user-name']}>Andrew Shapel</span>
      </div>
    );
  }
}
