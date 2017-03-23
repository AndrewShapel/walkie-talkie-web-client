import React from 'react';

import UserAvatar from '../../user-avatar/user-avatar';
import SearchInput from '../../search-input/search-input';
import CallActions from '../../call-actions/call-actions';

import chatHeaderClassNames from '../../../assets/css/blocks/chat/chat-header/chat-header.css';

export default () => (
  <div className={chatHeaderClassNames['chat-header']}>
    <div className={chatHeaderClassNames['chat-header__user']}>
      <UserAvatar />
      <div className={chatHeaderClassNames['chat-header__user-information']}>
        <span className={chatHeaderClassNames['chat-header__user-name']}>Beerfest</span>
        <span className={chatHeaderClassNames['chat-header__user-status']}>Online</span>
      </div>
    </div>
    <div className={chatHeaderClassNames['chat-header__search']}>
      <SearchInput />
    </div>
    <CallActions />
  </div>
);
