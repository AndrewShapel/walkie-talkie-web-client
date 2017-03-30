import React from 'react';
import classnames from 'classnames';

import { BUTTON_TYPES } from '../../constants/common';

import buttonClassNames from '../../assets/css/blocks/button/button.css';

const Button = ({ className, title, type }) => {
  const buttonClassName = classnames(buttonClassNames.button, className);

  return (
    <button className={buttonClassName} type={type}>
      <span>{title}</span>
    </button>
  );
};

Button.defaultProps = {
  className: '',
  type: BUTTON_TYPES.button,
};

Button.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
};

export default Button;
