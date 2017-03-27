import React from 'react';
import classnames from 'classnames';

import panelTabsClassNames from '../../../assets/css/blocks/panel/panel-tabs/panel-tabs.css';

const PanelTabs = ({ className }) => {
  const tabsClassName = classnames(panelTabsClassNames['panel-tabs'], className);

  return (
    <ul className={tabsClassName}>
      <li className={`${panelTabsClassNames['panel-tabs__tab']} ${panelTabsClassNames['panel-tabs__tab_active']}`}>Friends</li>
      <li className={panelTabsClassNames['panel-tabs__tab']}>Requests</li>
    </ul>
  );
};

PanelTabs.defaultProps = {
  className: '',
};

PanelTabs.propTypes = {
  className: React.PropTypes.string,
};

export default PanelTabs;

