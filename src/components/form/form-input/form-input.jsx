import React from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

import Input from '../../input/input';

@FormsyElement()
class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessages: [],
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
    const { getErrorMessages } = this.props;

    this.setState({
      errorMessages: getErrorMessages(),
    });
  }

  render() {
    const { errorMessages } = this.state;
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
        onChange={this.onChange}
      />
    );
  }
}

FormInput.defaultProps = Object.assign(Input.defaultProps, {
  onMount: null,
});

FormInput.propTypes = Object.assign(Input.propTypes, {
  onMount: React.PropTypes.func,
});

export default FormInput;
