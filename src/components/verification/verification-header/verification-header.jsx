import React from 'react';

import VertificationHeaderItem from './verification-header-item/verification-header-item';

import verificationHeaderClassNames from './verification-header.css';

export default class VerificationHeader extends React.PureComponent {

  static propTypes = {
    items: React.PropTypes.array,
    match: React.PropTypes.object,
  };

  static defaultProps = {
    items: [],
    match: {},
  };

  /**
   * @param {Array} items
   * @param {Object} match
   */
  static renderItems(items, match) {
    return items.map((item) => {
      const { title, path } = item;

      return (
        <VertificationHeaderItem
          title={title}
          key={title}
          match={match}
          path={path}
        />
      );
    });
  }

  render() {
    const { items, match } = this.props;

    return (
      <div className={verificationHeaderClassNames['verification-header']}>
        <ul className={verificationHeaderClassNames['verification-header__titles']}>
          { VerificationHeader.renderItems(items, match) }
        </ul>
      </div>
    );
  }
}
