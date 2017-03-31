import React from 'react';
import classnames from 'classnames';

import searchInputClassNames from '../../../assets/css/blocks/search/search-input/search-input.css';

class SearchInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus();
    }
  }

  onBlur() {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur();
    }
  }

  render() {
    const { className } = this.props;

    const inputClassName = classnames(searchInputClassNames['search-input'], className);

    return (
      <input
        className={inputClassName}
        placeholder="Search..."
        type="text"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

SearchInput.defaultProps = {
  className: '',
  onFocus: null,
  onBlur: null,
};

SearchInput.propTypes = {
  className: React.PropTypes.string,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
};

export default SearchInput;

