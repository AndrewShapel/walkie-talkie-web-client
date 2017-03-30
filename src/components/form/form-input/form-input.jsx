import React from 'react';

import Input from '../../input/input';

const FormInput = ({ className, inputClassName, placeholder }) => (
  <Input
    className={className}
    inputClassName={inputClassName}
    errorMessages={['Error1', 'Error2']}
    placeholder={placeholder}
  />
);

FormInput.defaultProps = Object.assign(Input.defaultProps);

FormInput.propTypes = Object.assign(Input.propTypes);

export default FormInput;
