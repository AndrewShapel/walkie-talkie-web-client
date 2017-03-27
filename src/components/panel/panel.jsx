import React from 'react';

import PanelHeader from './panel-header/panel-header';

import panelClassNames from '../../assets/css/blocks/panel/panel.css';

export default () => (
  <div className={panelClassNames.panel}>
    <PanelHeader />
  </div>
);
