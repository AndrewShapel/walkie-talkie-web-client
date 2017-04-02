import React from 'react';
import classnames from 'classnames';

import { BUTTON_TYPES } from '../../constants/form';

import buttonClassNames from '../../assets/css/blocks/button/button.css';

const Button = ({ className, title, type, isDisable }) => {
  const buttonClassName = classnames(buttonClassNames.button, {
    [buttonClassNames.button_disabled]: isDisable,
  }, className);

  return (
    <button className={buttonClassName} type={type} disabled={isDisable}>
      <span>{title}</span>
    </button>
  );
};

Button.defaultProps = {
  className: '',
  type: BUTTON_TYPES.button,
  isDisable: false,
};

Button.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  isDisable: React.PropTypes.bool,
};

export default Button;
