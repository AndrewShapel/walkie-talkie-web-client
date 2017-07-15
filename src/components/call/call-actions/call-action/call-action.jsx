import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import Svg from '../../../svg/svg';

import callActionClassNames from './call-action.css';

export default class CallAction extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    iconClassName: '',
    onClick: null,
  };

  @autobind
  onClick() {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    const { className, iconClassName, icon } = this.props;

    const actionClassName = classnames(callActionClassNames['call-action'], className);
    const actionIconClassName = classnames(callActionClassNames['call-action__icon'], iconClassName);

    return (
      <div className={actionClassName} onClick={this.onClick}>
        <Svg className={actionIconClassName} icon={icon} />
      </div>
    );
  }
}
