import React from 'react';
import classnames from 'classnames';

import { ICONS } from '../../../../constants/icons';

import Svg from '../../../svg/svg';
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
    const iconClassName = panelRequestsClassNames['panel-requests-item__icon'];
    const iconBlockedClassName = classnames(iconClassName, panelRequestsClassNames['panel-requests-item__icon_block']);
    const iconAcceptClassName = classnames(iconClassName, panelRequestsClassNames['panel-requests-item__icon_accept']);

    return (
      <li className={panelRequestsClassNames['panel-requests-item']}>
        <PanelContentUser />
        <div className={panelRequestsClassNames['panel-requests-item__icons']}>
          <Svg
            className={iconBlockedClassName}
            icon={ICONS.BLOCKED}
          />
          <Svg
            className={iconAcceptClassName}
            icon={ICONS.USER_CHECK}
          />
        </div>
      </li>
    );
  }
}
