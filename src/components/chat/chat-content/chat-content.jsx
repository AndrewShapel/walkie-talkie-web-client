import React from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage } from '../../../action-types/connections';

import ChatMessages from '../chat-messages/chat-messages';
import ChatSendInput from '../chat-send-input/chat-send-input';

import chatContentClassNames from './chat-content.css';

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    sendMessageAction: sendMessage,
  }, dispatch)
);

@connect(null, mapDispatchToProps)
export default class ChatContent extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    sendMessageAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  /**
   * @param {String} value
   */
  @autobind
  sendMessage(value) {
    const { sendMessageAction } = this.props;

    sendMessageAction(value);
  }

  render() {
    const { className } = this.props;

    const chatContentClassName = classnames(chatContentClassNames['chat-content'], className);

    return (
      <div className={chatContentClassName}>
        <ChatMessages className={chatContentClassNames['chat-content__messages']} />
        <div className={chatContentClassNames['chat-content__send-input']}>
          <ChatSendInput onSelect={this.sendMessage} />
        </div>
      </div>
    );
  }
}
