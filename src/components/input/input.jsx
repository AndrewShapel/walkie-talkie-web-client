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
    const { className, inputClassName, errorMessages, placeholder, isInvalid } = this.props;

    const containerClassName = classnames(inputClassNames.input, className);
    const containerInputClassName = classnames(inputClassNames.input__input, {
      [inputClassNames.input__input_invalid]: isInvalid,
    }, inputClassName);

    return (
      <div className={containerClassName}>
        <input
          className={containerInputClassName}
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
  errorMessages: [],
  placeholder: '',
  isInvalid: false,
};

Input.propTypes = {
  className: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  errorMessages: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  isInvalid: React.PropTypes.bool,
};

export default Input;

