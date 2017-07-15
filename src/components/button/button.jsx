import React from 'react';
import classnames from 'classnames';

import { BUTTON_TYPES } from '../../constants/form';

import buttonClassNames from './button.css';

export default class Button extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
    isDisable: React.PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    type: BUTTON_TYPES.button,
    isDisable: false,
  };

  render() {
    const { className, title, type, isDisable } = this.props;

    const buttonClassName = classnames(buttonClassNames.button, {
      [buttonClassNames.button_disabled]: isDisable,
    }, className);

    return (
      <button className={buttonClassName} type={type} disabled={isDisable}>
        <span>{title}</span>
      </button>
    );
  }
}
