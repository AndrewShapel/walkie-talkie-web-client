import React from 'react';
import classnames from 'classnames';

import chatSendInputClassNames from '../../../assets/css/blocks/chat/chat-send-input/chat-send-input.css';

const ChatSendInput = ({ className }) => {
  const sendInputClassName = classnames(chatSendInputClassNames['chat-send-input'], className);

  return (
    <div className={sendInputClassName}>
      <textarea className={chatSendInputClassNames['chat-send-input__text-area']} placeholder="Type message..." type="text" />
      <object className={chatSendInputClassNames['chat-send-input__icon']} data="assets/icons/svg/quill.svg" type="image/svg+xml" />
    </div>
  );
};

ChatSendInput.defaultProps = {
  className: '',
};

ChatSendInput.propTypes = {
  className: React.PropTypes.string,
};

export default ChatSendInput;
