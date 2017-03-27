import React from 'react';
import classnames from 'classnames';

import panelTabsItemClassNames from '../../../../assets/css/blocks/panel/panel-tabs/panel-tabs-item/panel-tabs-item.css';

const PanelTabsItem = ({ title, isActive }) => {
  const tabsItemClassName = classnames(panelTabsItemClassNames['panel-tabs-item'], {
    [panelTabsItemClassNames['panel-tabs-item_active']]: isActive,
  });

  return (
    <li className={tabsItemClassName}>{title}</li>
  );
};

PanelTabsItem.defaultProps = {
  title: '',
  isActive: false,
};

PanelTabsItem.propTypes = {
  title: React.PropTypes.string,
  isActive: React.PropTypes.bool,
};

export default PanelTabsItem;
