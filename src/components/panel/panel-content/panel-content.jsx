import React from 'react';

import PanelTabs from '../panel-tabs/panel-tabs';

import panelContentClassNames from '../../../assets/css/blocks/panel/panel-content/panel-content.css';

export default () => (
  <div className={panelContentClassNames['panel-content']}>
    <PanelTabs className={panelContentClassNames['panel-content__tabs']} />
  </div>
);
