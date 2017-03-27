import React from 'react';
import classnames from 'classnames';

import chatClassNames from '../../assets/css/blocks/chat/chat.css';

import ChatHeader from './chat-header/chat-header';
import ChatContent from './chat-content/chat-content';

const Chat = ({ className }) => {
  const chatClassName = classnames(chatClassNames.chat, className);

  return (
    <div className={chatClassName}>
      <ChatHeader />
      <ChatContent className={chatClassNames.chat__content} />
    </div>
  );
};

Chat.defaultProps = {
  className: '',
};

Chat.propTypes = {
  className: React.PropTypes.string,
};

export default Chat;

