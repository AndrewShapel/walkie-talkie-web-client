import React from 'react';

import { USER_STATUS } from '../../../constants/common';

import UserAvatar from '../../user/user-avatar/user-avatar';
import UserInformation from '../../user/user-information/user-information';
import SearchInput from '../../search-input/search-input';
import CallActions from '../../call-actions/call-actions';

import chatHeaderClassNames from '../../../assets/css/blocks/chat/chat-header/chat-header.css';

export default () => (
  <div className={chatHeaderClassNames['chat-header']}>
    <div className={chatHeaderClassNames['chat-header__user']}>
      <UserAvatar userStatus={USER_STATUS.ONLINE} />
      <UserInformation
        className={chatHeaderClassNames['chat-header__user-information']}
        userName="Beerfest"
        userStatus="Online"
      />
    </div>
    <div className={chatHeaderClassNames['chat-header__search']}>
      <SearchInput />
    </div>
    <CallActions />
  </div>
);
