import React from 'react';
import classnames from 'classnames';

import ChatMessages from '../chat-messages/chat-messages';
import ChatSendInput from '../chat-send-input/chat-send-input';

import chatContentClassNames from '../../../assets/css/blocks/chat/chat-content/chat-content.css';

const ChatContent = ({ className }) => {
  const chatContentClassName = classnames(chatContentClassNames['chat-content'], className);

  return (
    <div className={chatContentClassName}>
      <ChatMessages className={chatContentClassNames['chat-content__messages']} />
      <div className={chatContentClassNames['chat-content__send-input']}>
        <ChatSendInput />
      </div>
    </div>
  );
};

ChatContent.defaultProps = {
  className: '',
};

ChatContent.propTypes = {
  className: React.PropTypes.string,
};

export default ChatContent;
