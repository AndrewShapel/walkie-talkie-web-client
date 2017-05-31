import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import panelTabsItemClassNames from './panel-tabs-item.css';

export default class PanelTabsItem extends React.PureComponent {

  static propTypes = {
    title: React.PropTypes.string,
    id: React.PropTypes.string,
    isActive: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    title: '',
    id: '',
    isActive: false,
    onClick: null,
  };

  @autobind
  onClick() {
    const { id, onClick } = this.props;

    if (onClick) {
      onClick(id);
    }
  }

  render() {
    const { title, isActive } = this.props;

    const tabsItemClassName = classnames(panelTabsItemClassNames['panel-tabs-item'], {
      [panelTabsItemClassNames['panel-tabs-item_active']]: isActive,
    });

    return (
      <li className={tabsItemClassName} onClick={this.onClick}>
        {title}
      </li>
    );
  }
}
