import React from 'react';

import PanelHeader from './panel-header/panel-header';
import PanelContent from './panel-content/panel-content';

import panelClassNames from '../../assets/css/blocks/panel/panel.css';

export default () => (
  <div className={panelClassNames.panel}>
    <PanelHeader />
    <PanelContent />
  </div>
);
