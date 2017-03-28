import React from 'react';
import classnames from 'classnames';

import dropdownClassNames from '../../../assets/css/blocks/dropdowns/dropdown/dropdown.css';

const Dropdown = ({ className, children }) => {
  const dropdownClassName = classnames(dropdownClassNames.dropdown, className);

  return (
    <div className={dropdownClassName}>
      {children}
      <div className={dropdownClassNames.dropdown__items} />
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  children: null,
};

Dropdown.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.object,
};

export default Dropdown;
