import React from 'react';
import classnames from 'classnames';

import inputClassNames from '../../assets/css/blocks/input/input.css';

class Input extends React.PureComponent {
  /**
   * @param {Array} errorMessages
   */
  static renderErrorMessages(errorMessages) {
    return errorMessages.map(errorMessage => (
      <span className={inputClassNames['input__error-message']} key={errorMessage}>
        {errorMessage}
      </span>
    ));
  }

  render() {
    const { className, inputClassName, name, value, placeholder, errorMessages, isInvalid } = this.props;

    const containerClassName = classnames(inputClassNames.input, className);
    const containerInputClassName = classnames(inputClassNames.input__input, {
      [inputClassNames.input__input_invalid]: isInvalid || errorMessages.length > 0,
    }, inputClassName);

    return (
      <div className={containerClassName}>
        <input
          className={containerInputClassName}
          name={name}
          value={value}
          placeholder={placeholder}
          type="text"
        />
        {Input.renderErrorMessages(errorMessages)}
      </div>
    );
  }
}

Input.defaultProps = {
  className: '',
  inputClassName: '',
  name: '',
  value: '',
  placeholder: '',
  errorMessages: [],
  isInvalid: false,
};

Input.propTypes = {
  className: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  errorMessages: React.PropTypes.array,
  isInvalid: React.PropTypes.bool,
};

export default Input;

