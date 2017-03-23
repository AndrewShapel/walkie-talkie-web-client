import React from 'react';
import classnames from 'classnames';

import chatContentClassNames from '../../../assets/css/blocks/chat/chat-content/chat-content.css';

const ChatContent = ({ className }) => {
  const chatContentClassName = classnames(chatContentClassNames['chat-content'], className);

  return (
    <div className={chatContentClassName}>24</div>
  );
};

ChatContent.defaultProps = {
  className: null,
};

ChatContent.propTypes = {
  className: React.PropTypes.string,
};

export default ChatContent;
