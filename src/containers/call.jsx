import React from 'react';

import CallParticipant from '../components/call/call-participant/call-participant';
import CallFooter from '../components/call/call-footer/call-footer';
import ChatContent from '../components/chat/chat-content/chat-content';

import callClassNames from '../assets/css/containers/call/call.css';

export default () => (
  <div className={callClassNames.call}>
    <div className={callClassNames.call__participants}>
      <CallParticipant />
    </div>
    <CallFooter />
    <div className={callClassNames.call__chat}>
      <ChatContent />
    </div>
  </div>
);
