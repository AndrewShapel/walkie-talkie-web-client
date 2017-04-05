import React from 'react';
import classnames from 'classnames';

import { ICONS } from '../../../constants/icons';

import Svg from '../../svg/svg';

import callActionsClassNames from './call-actions.css';

export default class CallActions extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    actionClassName: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
    actionClassName: '',
  };

  render() {
    const { className, actionClassName } = this.props;

    const callActionsClassName = classnames(callActionsClassNames['call-actions'], className);
    const callActionClassName = classnames(callActionsClassNames['call-actions__action'], actionClassName);

    return (
      <div className={callActionsClassName}>
        <div className={callActionClassName}>
          <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.VOLUME_HIGH} />
        </div>
        <div className={callActionClassName}>
          <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.VIDEO_CAMERA} />
        </div>
        <div className={callActionClassName}>
          <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PHONE} />
        </div>
        <div className={callActionClassName}>
          <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PHONE_HANG_UP} />
        </div>
        <div className={callActionClassName}>
          <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PLUS} />
        </div>
      </div>
    );
  }
}
