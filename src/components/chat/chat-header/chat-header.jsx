import React from 'react';

import SearchInputExpand from '../../search/search-input-expand/search-input-expand';
import CallActions from '../../call/call-actions/call-actions';

import chatHeaderClassNames from './chat-header.css';

export default () => (
  <div className={chatHeaderClassNames['chat-header']}>
    <div className={chatHeaderClassNames['chat-header__search']}>
      <SearchInputExpand />
    </div>
    <CallActions />
  </div>
);
