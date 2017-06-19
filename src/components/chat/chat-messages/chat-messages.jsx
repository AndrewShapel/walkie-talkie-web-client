import React from 'react';
import classnames from 'classnames';

import { uniqueId } from 'lodash';
import moment from 'moment';

import { connect } from 'react-redux';

import ChatMessage from './chat-message/chat-message';

import chatMessagesClassNames from './chat-messages.css';

/**
 * @param {Object} Chats
 * @param {Object} Conversations
 * @returns {Object}
 */
const mapStateToProps = ({ Chats, Conversations }) => {
  const activeConversationId = Conversations.getActiveId();
  return {
    activeChat: Chats.getChatById(activeConversationId),
  };
};

@connect(mapStateToProps)
export default class ChatMessages extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    activeChat: React.PropTypes.object,
  };

  static defaultProps = {
    className: '',
    activeChat: null,
  };

  /**
   * @param {Object} messages
   * @returns {Object}
   */
  static renderMessages(messages) {
    return messages.map((message) => {
      const body = message.getBody();
      const time = message.getTimestamp();
      const timeInHumanFormat = moment(time).fromNow();

      return (
        <li
          className={chatMessagesClassNames['chat-messages__message']}
          key={uniqueId('message_')}
        >
          <ChatMessage time={timeInHumanFormat} message={body} />
        </li>
      );
    });
  }

  render() {
    const { className, activeChat } = this.props;

    const messages = (activeChat)
      ? activeChat.getMessages()
      : [];

    const chatMessagesClassName = classnames(chatMessagesClassNames['chat-messages'], className);

    return (
      <ul className={chatMessagesClassName}>
        { ChatMessages.renderMessages(messages) }
      </ul>
    );
  }
}
