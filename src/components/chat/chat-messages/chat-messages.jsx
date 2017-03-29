import React from 'react';
import classnames from 'classnames';

import ChatMessage from './chat-message/chat-message';

import chatMessagesClassNames from '../../../assets/css/blocks/chat/chat-messages/chat-messages.css';

const ChatMessages = ({ className }) => {
  const chatMessagesClassName = classnames(chatMessagesClassNames['chat-messages'], className);

  return (
    <ul className={chatMessagesClassName}>
      <li className={chatMessagesClassNames['chat-messages__message']}>
        <ChatMessage time={'14:25'} message={'Message text'} />
      </li>
      <li className={chatMessagesClassNames['chat-messages__message']}>
        <ChatMessage time={'14:25'} message={'Message text'} isFrom={false} />
      </li>
    </ul>
  );
};

ChatMessages.defaultProps = {
  className: '',
};

ChatMessages.propTypes = {
  className: React.PropTypes.string,
};

export default ChatMessages;

