import React from 'react';
import autobind from 'autobind-decorator';
import { Decorator as FormsyElement } from 'formsy-react';

import Input from '../../input/input';

@FormsyElement()
export default class FormInput extends React.Component {

  static defaultProps = Object.assign({}, Input.defaultProps, {
    validations: {},
    validationErrors: {},
    onMount: null,
  });

  static propTypes = Object.assign({}, Input.propTypes, {
    validations: React.PropTypes.object,
    validationErrors: React.PropTypes.object,
    onMount: React.PropTypes.func,
  });

  state = {
    errorMessages: [],
    isShowRequired: false,
  };

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
  @autobind
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

  reset() {
    const { defaultValue, setValue } = this.props;

    const input = this.input;
    if (input) {
      input.reset();
    }

    setValue(defaultValue);
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
        ref={(node) => { this.input = node; }}
      />
    );
  }
}
