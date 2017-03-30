import React from 'react';
import classnames from 'classnames';

import { INPUT_TYPES } from '../../constants/common';

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
    const { className, inputClassName, name, defaultValue, placeholder, type, errorMessages, isInvalid, isShowRequired } = this.props;

    const requireStar = (isShowRequired) ? <span className={inputClassNames.input__required}>*</span> : null;

    const containerClassName = classnames(inputClassNames.input, className);
    const inputContainerClassName = classnames(inputClassNames['input__input-container'], {
      [inputClassNames['input__input-container_invalid']]: isInvalid || errorMessages.length > 0,
    });
    const containerInputClassName = classnames(inputClassNames.input__input, inputClassName);

    return (
      <div className={containerClassName}>
        <div className={inputContainerClassName}>
          <input
            className={containerInputClassName}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={type}
            onChange={this.onChange}
          />
          {requireStar}
        </div>
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
  type: INPUT_TYPES.text,
  errorMessages: [],
  isInvalid: false,
  isShowRequired: false,
  onChange: null,
};

Input.propTypes = {
  className: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  name: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  errorMessages: React.PropTypes.array,
  isInvalid: React.PropTypes.bool,
  isShowRequired: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

export default Input;

