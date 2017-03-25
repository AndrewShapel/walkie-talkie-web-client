import React from 'react';

import Svg from '../svg/svg';

import searchInputClassNames from '../../assets/css/blocks/search-input/search-input.css';

export default () => (
  <div className={searchInputClassNames['search-input']}>
    <input className={searchInputClassNames['search-input__input']} type="text" />
    <Svg className={searchInputClassNames['search-input__icon']} path="assets/icons/svg/search.svg" />
  </div>
);
