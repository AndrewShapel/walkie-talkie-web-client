import React from 'react';

import chatHeaderClassNames from '../../../assets/css/blocks/chat/chat-header/chat-header.css';

export default () => (
  <div className={chatHeaderClassNames.container}>
    <div className={chatHeaderClassNames.userContainer}>
      <div className={chatHeaderClassNames.avatar} />
      <div className={chatHeaderClassNames.userInformation}>
        <span className={chatHeaderClassNames.userName}>Beerfest</span>
        <span className={chatHeaderClassNames.userStatus}>Online</span>
      </div>
    </div>
    <object data="assets/icons/svg/phone.svg" type="image/svg+xml" />
  </div>
);
