import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { ICONS } from '../../constants/icons';

import CallParticipant from './call-participant/call-participant';
import CallActions from '../call/call-actions/call-actions';
import CallAction from '../call/call-actions/call-action/call-action';
import ChatContent from '../chat/chat-content/chat-content';

import callClassNames from './call.css';

export default class Call extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    isChatOpen: false,
  };

  @autobind
  onChatToggle() {
    const { isChatOpen } = this.state;

    this.setState({
      isChatOpen: !isChatOpen,
    });
  }

  render() {
    const { isChatOpen } = this.state;
    const { className } = this.props;

    const callClassName = classnames(callClassNames.call, className);
    const chatClassName = classnames(callClassNames.call__chat, {
      [callClassNames.call__chat_hide]: !isChatOpen,
    });
    const chatActionClassName = classnames(callClassNames.call__action, callClassNames['call__action-chat']);

    return (
      <div className={callClassName}>
        <div className={callClassNames.call__participants}>
          <CallParticipant />
        </div>
        <CallActions
          className={callClassNames.call__actions}
          actionClassName={callClassNames.call__action}
        >
          <CallAction
            className={chatActionClassName}
            icon={ICONS.BUBBLES}
            onClick={this.onChatToggle}
          />
        </CallActions>
        <div className={chatClassName}>
          <ChatContent />
        </div>
      </div>
    );
  }
}
