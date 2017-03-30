import React from 'react';

import Input from '../../input/input';

const FormInput = ({ className, inputClassName, name, value, placeholder }) => (
  <Input
    className={className}
    inputClassName={inputClassName}
    name={name}
    value={value}
    placeholder={placeholder}
    errorMessages={['Error1', 'Error2']}
  />
);

FormInput.defaultProps = Object.assign(Input.defaultProps);

FormInput.propTypes = Object.assign(Input.propTypes);

export default FormInput;
