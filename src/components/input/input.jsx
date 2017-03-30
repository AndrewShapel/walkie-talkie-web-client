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

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  /**
   * @param {Object} event
   */
  onChange(event) {
    const { onChange } = this.props;

    const value = event.target.value;
    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const { className, inputClassName, name, defaultValue, placeholder, errorMessages, isInvalid } = this.props;

    const containerClassName = classnames(inputClassNames.input, className);
    const containerInputClassName = classnames(inputClassNames.input__input, {
      [inputClassNames.input__input_invalid]: isInvalid || errorMessages.length > 0,
    }, inputClassName);

    return (
      <div className={containerClassName}>
        <input
          className={containerInputClassName}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          type="text"
          onChange={this.onChange}
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
  defaultValue: '',
  placeholder: '',
  errorMessages: [],
  isInvalid: false,
  onChange: null,
};

Input.propTypes = {
  className: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  name: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  errorMessages: React.PropTypes.array,
  isInvalid: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

export default Input;

