import React from 'react';

import ChatMessage from './chat-message/chat-message';

import chatMessagesClassNames from '../../../assets/css/blocks/chat/chat-messages/chat-messages.css';

export default () => (
  <ul className={chatMessagesClassNames['chat-messages']}>
    <li className={chatMessagesClassNames['chat-messages__message']}>
      <ChatMessage time={'14:25'} message={'Message text'} />
    </li>
    <li className={chatMessagesClassNames['chat-messages__message']}>
      <ChatMessage time={'14:25'} message={'Message text'} isFrom={false} />
    </li>
  </ul>
);
