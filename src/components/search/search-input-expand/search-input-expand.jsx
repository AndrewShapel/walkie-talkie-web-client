import React from 'react';

import { ICONS } from '../../../constants/icons';

import Svg from '../../svg/svg';

import searchInputExpandClassNames from './search-input-expand.css';

export default () => (
  <div className={searchInputExpandClassNames['search-input-expand']}>
    <input className={searchInputExpandClassNames['search-input-expand__input']} type="text" />
    <Svg className={searchInputExpandClassNames['search-input-expand__icon']} icon={ICONS.SEARCH} />
  </div>
);
