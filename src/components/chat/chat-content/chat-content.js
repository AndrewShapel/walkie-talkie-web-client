import React from 'react';
import classnames from 'classnames';

import ChatMessages from '../chat-messages/chat-messages';

import chatContentClassNames from '../../../assets/css/blocks/chat/chat-content/chat-content.css';

const ChatContent = ({ className }) => {
  const chatContentClassName = classnames(chatContentClassNames['chat-content'], className);

  return (
    <div className={chatContentClassName}>
      <ChatMessages />
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
