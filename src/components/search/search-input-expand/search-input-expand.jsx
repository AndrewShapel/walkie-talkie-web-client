import React from 'react';

import Svg from '../../svg/svg';

import searchInputExpandClassNames from '../../../assets/css/blocks/search/search-input-expand/search-input-expand.css';

export default () => (
  <div className={searchInputExpandClassNames['search-input-expand']}>
    <input className={searchInputExpandClassNames['search-input-expand__input']} type="text" />
    <Svg className={searchInputExpandClassNames['search-input-expand__icon']} path="assets/icons/svg/search.svg" />
  </div>
);
