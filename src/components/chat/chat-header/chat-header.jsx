import React from 'react';

import CallActions from '../../call-actions/call-actions';

import chatHeaderClassNames from '../../../assets/css/blocks/chat/chat-header/chat-header.css';

export default () => (
  <div className={chatHeaderClassNames.chatHeader}>
    <div className={chatHeaderClassNames.chatHeader__user}>
      <div className={chatHeaderClassNames.avatar} />
      <div className={chatHeaderClassNames.chatHeader__userInformation}>
        <span className={chatHeaderClassNames.chatHeader__userName}>Beerfest</span>
        <span className={chatHeaderClassNames.chatHeader__userStatus}>Online</span>
      </div>
    </div>
    <div className={chatHeaderClassNames.chatHeader__search}>
      <div className={chatHeaderClassNames.search}>
        <input className={chatHeaderClassNames.search__searchInput} type="text" />
        <object className={chatHeaderClassNames.search__searchIcon} data="assets/icons/svg/search.svg" type="image/svg+xml" />
      </div>
    </div>
    <CallActions />
  </div>
);
