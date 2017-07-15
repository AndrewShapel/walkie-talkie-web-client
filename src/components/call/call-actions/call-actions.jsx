import React from 'react';
import classnames from 'classnames';

import { ICONS } from '../../../constants/icons';

import CallAction from './call-action/call-action';

import callActionsClassNames from './call-actions.css';

export default class CallActions extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    actionClassName: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    isMute: React.PropTypes.bool,
    isActive: React.PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    actionClassName: '',
    children: null,
    isMute: false,
    isActive: false,
  };

  render() {
    const { className, actionClassName, children, isMute, isActive } = this.props;

    const callActionsClassName = classnames(callActionsClassNames['call-actions'], className);

    const volumeAction = (isMute)
      ? <CallAction className={actionClassName} icon={ICONS.VOLUME_MUTE} />
      : <CallAction className={actionClassName} icon={ICONS.VOLUME_HIGH} />;
    const phoneAction = (!isActive)
      ? <CallAction className={actionClassName} icon={ICONS.PHONE} />
      : <CallAction className={actionClassName} icon={ICONS.PHONE_HANG_UP} />;

    return (
      <div className={callActionsClassName}>
        { isActive ? volumeAction : null }
        <CallAction className={actionClassName} icon={ICONS.VIDEO_CAMERA} />
        {phoneAction}
        {children}
      </div>
    );
  }
}
