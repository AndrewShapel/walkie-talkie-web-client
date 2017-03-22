import React from 'react';

import UserAvatar from '../../user-avatar/user-avatar';
import SearchInput from '../../search-input/search-input';
import CallActions from '../../call-actions/call-actions';

import chatHeaderClassNames from '../../../assets/css/blocks/chat/chat-header/chat-header.css';

export default () => (
  <div className={chatHeaderClassNames.chatHeader}>
    <div className={chatHeaderClassNames.chatHeader__user}>
      <UserAvatar />
      <div className={chatHeaderClassNames.chatHeader__userInformation}>
        <span className={chatHeaderClassNames.chatHeader__userName}>Beerfest</span>
        <span className={chatHeaderClassNames.chatHeader__userStatus}>Online</span>
      </div>
    </div>
    <div className={chatHeaderClassNames.chatHeader__search}>
      <SearchInput />
    </div>
    <CallActions />
  </div>
);
