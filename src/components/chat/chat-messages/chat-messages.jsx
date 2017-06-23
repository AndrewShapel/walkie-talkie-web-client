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
const mapStateToProps = ({ Chats, Conversations, Users }) => {
  const activeConversationId = Conversations.getActiveId();
  return {
    activeChat: Chats.getChatById(activeConversationId),
    accountEmail: Users.getAccount().getEmail(),
  };
};

@connect(mapStateToProps)
export default class ChatMessages extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    activeChat: React.PropTypes.object,
    accountEmail: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
    activeChat: null,
    accountEmail: '',
  };

  /**
   * @param {Object} messages
   * @param {String} accountEmail
   * @returns {Object}
   */
  static renderMessages(messages, accountEmail) {
    return messages.map((message) => {
      const senderEmail = message.getSenderEmail();
      const isFrom = senderEmail !== accountEmail;

      const body = message.getBody();
      const time = message.getTimestamp();
      const timeInHumanFormat = moment(time).fromNow();

      return (
        <li
          className={chatMessagesClassNames['chat-messages__message']}
          key={uniqueId('message_')}
        >
          <ChatMessage
            time={timeInHumanFormat}
            message={body}
            isFrom={isFrom}
          />
        </li>
      );
    });
  }

  render() {
    const { className, activeChat, accountEmail } = this.props;

    const messages = (activeChat)
      ? activeChat.getMessages()
      : [];

    const chatMessagesClassName = classnames(chatMessagesClassNames['chat-messages'], className);

    return (
      <ul className={chatMessagesClassName}>
        { ChatMessages.renderMessages(messages, accountEmail) }
      </ul>
    );
  }
}
