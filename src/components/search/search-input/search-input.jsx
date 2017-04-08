import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import searchInputClassNames from './search-input.css';

export default class SearchInput extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    onFocus: null,
    onBlur: null,
  };

  @autobind
  onFocus() {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus();
    }
  }

  @autobind
  onBlur() {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur();
    }
  }

  /**
   * @returns {Element}
   */
  getRef() {
    return this.searchInput;
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
        ref={(node) => { this.searchInput = node; }}
      />
    );
  }
}
