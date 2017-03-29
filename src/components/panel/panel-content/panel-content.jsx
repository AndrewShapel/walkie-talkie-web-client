import React from 'react';

import PanelTabs from '../panel-tabs/panel-tabs';
import PanelFriends from '../panel-friends/panel-friends';

import panelContentClassNames from '../../../assets/css/blocks/panel/panel-content/panel-content.css';

export default () => (
  <div className={panelContentClassNames['panel-content']}>
    <PanelTabs className={panelContentClassNames['panel-content__tabs']} />
    <PanelFriends className={panelContentClassNames['panel-content__friends']} />
  </div>
);
