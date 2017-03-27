import React from 'react';
import classnames from 'classnames';

import searchInputClassNames from '../../../assets/css/blocks/search/search-input/search-input.css';

const SearchInput = ({ className }) => {
  const inputClassName = classnames(searchInputClassNames['search-input'], className);

  return (
    <input className={inputClassName} placeholder="Search..." type="text" />
  );
};

SearchInput.defaultProps = {
  className: '',
};

SearchInput.propTypes = {
  className: React.PropTypes.string,
};

export default SearchInput;

