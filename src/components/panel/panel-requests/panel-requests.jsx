import React from 'react';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import SearchInput from '../../search/search-input/search-input';
import PanelRequestsItem from './panel-requests-item/panel-requests-item';

export default class PanelRequests extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    itemClassName: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
    itemClassName: '',
    searchInputClassName: '',
  };

  render() {
    const { className, itemClassName, searchInputClassName } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
        />
        <PanelRequestsItem
          className={itemClassName}
        />
      </ul>
    );
  }
}