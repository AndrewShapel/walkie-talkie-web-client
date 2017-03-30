import React from 'react';
import classnames from 'classnames';

import inputClassNames from '../../assets/css/blocks/input/input.css';

const Input = ({ inputClassName, placeholder, isInvalid }) => {
  const containerInputClassName = classnames(inputClassNames.input__input, {
    [inputClassNames.input__input_invalid]: isInvalid,
  }, inputClassName);

  return (
    <div className={inputClassNames.input}>
      <input
        className={containerInputClassName}
        placeholder={placeholder}
        type="text"
      />
      <span className={inputClassNames.input__error}>Error</span>
    </div>
  );
};

Input.defaultProps = {
  inputClassName: '',
  placeholder: '',
  isInvalid: false,
};

Input.propTypes = {
  inputClassName: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  isInvalid: React.PropTypes.bool,
};

export default Input;

