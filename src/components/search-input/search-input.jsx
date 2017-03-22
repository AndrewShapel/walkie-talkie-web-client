import React from 'react';

import searchInputClassNames from '../../assets/css/blocks/search-input/search-input.css';

export default () => (
  <div className={searchInputClassNames.searchInput}>
    <input className={searchInputClassNames.searchInput__input} type="text" />
    <object className={searchInputClassNames.searchInput__icon} data="assets/icons/svg/search.svg" type="image/svg+xml" />
  </div>
);
