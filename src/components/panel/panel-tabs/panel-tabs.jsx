import React from 'react';
import classnames from 'classnames';

import PanelTabsItem from './panel-tabs-item/panel-tabs-item';

import panelTabsClassNames from './panel-tabs.css';

export default class PanelTabs extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    const tabsClassName = classnames(panelTabsClassNames['panel-tabs'], className);

    return (
      <ul className={tabsClassName}>
        <PanelTabsItem title="Friends" isActive />
        <PanelTabsItem title="Requests" />
      </ul>
    );
  }
}
