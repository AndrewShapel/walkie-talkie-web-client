import React from 'react';

import VertificationHeaderItem from './verification-header-item/verification-header-item';

import verificationHeaderClassNames from '../../../assets/css/blocks/verification/verification-header/verification-header.css';

class VerificationHeader extends React.PureComponent {
  /**
   * @param {Array} items
   * @param {String} activeItemType
   * @param {Function} onItemSelect
   * @returns {Object}
   */
  static renderItems(items, activeItemType, onItemSelect) {
    return items.map((item) => {
      const { title, type } = item;

      return (
        <VertificationHeaderItem
          title={title}
          type={type}
          onClick={onItemSelect}
          isActive={type === activeItemType}
          key={title}
        />
      );
    });
  }

  render() {
    const { items, activeItemType, onItemSelect } = this.props;

    return (
      <div className={verificationHeaderClassNames['verification-header']}>
        <ul className={verificationHeaderClassNames['verification-header__titles']}>
          { VerificationHeader.renderItems(items, activeItemType, onItemSelect) }
        </ul>
      </div>
    );
  }
}

VerificationHeader.defaultProps = {
  items: [],
  activeItemType: '',
  onItemSelect: null,
};

VerificationHeader.propTypes = {
  items: React.PropTypes.array,
  activeItemType: React.PropTypes.string,
  onItemSelect: React.PropTypes.func,
};

export default VerificationHeader;
