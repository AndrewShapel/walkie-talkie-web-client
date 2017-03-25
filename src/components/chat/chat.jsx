import React from 'react';

import chatClassNames from '../../assets/css/blocks/chat/chat.css';

import ChatHeader from './chat-header/chat-header';
import ChatContent from './chat-content/chat-content';

export default () => (
  <div className={chatClassNames.chat}>
    <ChatHeader />
    <ChatContent className={chatClassNames.chat__content} />
  </div>
);
