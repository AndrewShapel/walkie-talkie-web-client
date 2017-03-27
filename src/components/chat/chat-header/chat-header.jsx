import React from 'react';

import { USER_STATUS } from '../../../constants/common';

import User from '../../user/user';
import SearchInput from '../../search-input/search-input';
import CallActions from '../../call-actions/call-actions';

import chatHeaderClassNames from '../../../assets/css/blocks/chat/chat-header/chat-header.css';

export default () => (
  <div className={chatHeaderClassNames['chat-header']}>
    <User
      className={chatHeaderClassNames['chat-header__user']}
      userStatus={USER_STATUS.ONLINE}
      userName="Beerfest"
      userStatusName="Online"
    />
    <div className={chatHeaderClassNames['chat-header__search']}>
      <SearchInput />
    </div>
    <CallActions />
  </div>
);
