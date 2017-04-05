import React from 'react';
import classnames from 'classnames';

import { ICONS } from '../../../constants/icons';

import Svg from '../../svg/svg';
import DropdownSearchUser from '../../../components/dropdown/dropdown-search-user/dropdown-search-user';

import callActionsClassNames from './call-actions.css';

export default class CallActions extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    actionClassName: React.PropTypes.string,
    isMute: React.PropTypes.bool,
    isActive: React.PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    actionClassName: '',
    isMute: false,
    isActive: false,
  };

  render() {
    const { className, actionClassName, isMute, isActive } = this.props;

    const callActionsClassName = classnames(callActionsClassNames['call-actions'], className);
    const callActionClassName = classnames(callActionsClassNames['call-actions__action'], actionClassName);

    const volumeIcon = (isMute)
      ? <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.VOLUME_MUTE} />
      : <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.VOLUME_HIGH} />;
    const phoneIcon = (isActive)
      ? <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PHONE} />
      : <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PHONE_HANG_UP} />;

    return (
      <div className={callActionsClassName}>
        <div className={callActionClassName}>
          {volumeIcon}
        </div>
        <div className={callActionClassName}>
          <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.VIDEO_CAMERA} />
        </div>
        <div className={callActionClassName}>
          {phoneIcon}
        </div>
        <div className={callActionClassName}>
          <DropdownSearchUser itemsClassName={callActionsClassNames['call-actions__dropdown-items']} isStickToBottom>
            <div>
              <Svg className={callActionsClassNames['call-actions__icon']} icon={ICONS.PLUS} />
            </div>
          </DropdownSearchUser>
        </div>
      </div>
    );
  }
}
