import React from 'react';
import classnames from 'classnames';

import { ICONS } from '../../constants/icons';

import Svg from '../svg/svg';

import spinnerClassNames from './spinner.css';

const Spinner = ({ className }) => {
  const spinnerClassName = classnames(spinnerClassNames.spinner, className);

  return (
    <Svg className={spinnerClassName} icon={ICONS.SPINNER} />
  );
};

Spinner.propTypes = {
  className: React.PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
};

export default Spinner;
