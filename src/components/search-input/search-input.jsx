import React from 'react';

import searchInputClassNames from '../../assets/css/blocks/search-input/search-input.css';

export default () => (
  <div className={searchInputClassNames['search-input']}>
    <input className={searchInputClassNames['search-input__input']} type="text" />
    <object className={searchInputClassNames['search-input__icon']} data="assets/icons/svg/search.svg" type="image/svg+xml" />
  </div>
);
