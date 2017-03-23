import React from 'react';

import chatClassNames from '../../assets/css/blocks/chat/chat.css';

import ChatHeader from './chat-header/chat-header';

export default () => (
  <div className={chatClassNames.chat}>
    <ChatHeader />
  </div>
);
