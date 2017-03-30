import React from 'react';
import classnames from 'classnames';

import buttonClassNames from '../../assets/css/blocks/button/button.css';

const Button = ({ className, title }) => {
  const buttonClassName = classnames(buttonClassNames.button, className);

  return (
    <button className={buttonClassName}>
      <span>{title}</span>
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
};

export default Button;
