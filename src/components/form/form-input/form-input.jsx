import React from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

import Input from '../../input/input';

@FormsyElement()
class FormInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const { defaultValue, setValue } = this.props;
    if (defaultValue) {
      setValue(defaultValue);
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

  render() {
    const { className, inputClassName, name, defaultValue, placeholder } = this.props;

    return (
      <Input
        className={className}
        inputClassName={inputClassName}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        errorMessages={['Error1', 'Error2']}
        onChange={this.onChange}
      />
    );
  }
}

FormInput.defaultProps = Object.assign(Input.defaultProps);

FormInput.propTypes = Object.assign(Input.propTypes);

export default FormInput;
