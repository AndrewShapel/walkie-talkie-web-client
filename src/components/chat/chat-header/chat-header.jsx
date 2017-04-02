import React from 'react';

import { USER_STATUS } from '../../../constants/user';

import User from '../../user/user';
import SearchInputExpand from '../../search/search-input-expand/search-input-expand';
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
      <SearchInputExpand />
    </div>
    <CallActions />
  </div>
);
