import React from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

import Input from '../../input/input';

@FormsyElement()
class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessages: [],
      isShowRequired: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const { defaultValue, setValue } = this.props;

    if (defaultValue) {
      setValue(defaultValue);
    }
  }

  componentDidMount() {
    const { onMount } = this.props;

    if (onMount) {
      onMount(this);
    }
  }

  /**
   * @param {String} value
   */
  onChange(value) {
    const { getValue, setValue } = this.props;

    const previousValue = getValue();
    if (value !== previousValue) {
      setValue(value);
    }
  }

  validate() {
    const { isRequired, showRequired, getErrorMessages } = this.props;

    this.setState({
      errorMessages: getErrorMessages(),
      isShowRequired: isRequired() && showRequired(),
    });
  }

  render() {
    const { errorMessages, isShowRequired } = this.state;
    const { className, inputClassName, name, defaultValue, placeholder, type } = this.props;

    return (
      <Input
        className={className}
        inputClassName={inputClassName}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
        errorMessages={errorMessages}
        isInvalid={isShowRequired}
        isShowRequired={isShowRequired}
        onChange={this.onChange}
      />
    );
  }
}

FormInput.defaultProps = Object.assign(Input.defaultProps, {
  validations: {},
  validationErrors: {},
  onMount: null,
});

FormInput.propTypes = Object.assign(Input.propTypes, {
  validations: React.PropTypes.object,
  validationErrors: React.PropTypes.object,
  onMount: React.PropTypes.func,
});

export default FormInput;
