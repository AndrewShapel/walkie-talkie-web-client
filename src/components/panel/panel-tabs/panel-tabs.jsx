import React from 'react';
import classnames from 'classnames';

import PanelTabsItem from './panel-tabs-item/panel-tabs-item';

import panelTabsClassNames from './panel-tabs.css';

const PanelTabs = ({ className }) => {
  const tabsClassName = classnames(panelTabsClassNames['panel-tabs'], className);

  return (
    <ul className={tabsClassName}>
      <PanelTabsItem title="Friends" isActive />
      <PanelTabsItem title="Requests" />
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

