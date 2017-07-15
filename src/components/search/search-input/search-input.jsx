import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { debounce } from 'lodash';

import { INPUT_TYPES } from '../../../constants/form';

import searchInputClassNames from './search-input.css';

export default class SearchInput extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    delay: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    delay: 0,
    onChange: null,
    onFocus: null,
    onBlur: null,
  };

  componentWillMount() {
    const { delay } = this.props;

    this.delayedOnChange = debounce(this.delayedOnChange, delay).bind(this);
  }

  /**
   * @param {Object} event
   */
  @autobind
  onChange(event) {
    const value = event.target.value;
    this.delayedOnChange(value);
  }

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

  /**
   * @param {String} value
   */
  @autobind
  delayedOnChange(value) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const { className } = this.props;

    const inputClassName = classnames(searchInputClassNames['search-input'], className);

    return (
      <input
        className={inputClassName}
        placeholder="Search..."
        type={INPUT_TYPES.text}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={(node) => { this.searchInput = node; }}
      />
    );
  }
}
