import React from 'react';
import classnames from 'classnames';

import SearchInput from '../../search/search-input/search-input';

export default class PanelRequests extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    const requestsClassName = classnames(className);

    return (
      <ul>
        <SearchInput
          className={requestsClassName}
          delay={300}
        />
      </ul>
    );
  }
}