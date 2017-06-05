import React from 'react';

import PanelContentUser from '../../panel-content/panel-content-user/panel-content-user';

import panelRequestsClassNames from './panel-requests-item.css';

export default class PanelRequestsItem extends React.PureComponent {

  static propTypes = {
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    onSelect: null,
  };

  render() {
    return (
      <li className={panelRequestsClassNames['panel-requests-item']}>
        <PanelContentUser />
      </li>
    );
  }
}
