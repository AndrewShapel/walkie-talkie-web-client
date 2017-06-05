import React from 'react';

import SearchInput from '../../search/search-input/search-input';
import PanelRequestsItem from './panel-requests-item/panel-requests-item';

export default class PanelRequests extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
    searchInputClassName: '',
  };

  render() {
    const { className, searchInputClassName } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
        />
        <PanelRequestsItem />
      </ul>
    );
  }
}
