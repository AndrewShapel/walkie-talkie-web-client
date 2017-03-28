import React from 'react';
import classnames from 'classnames';

import Dropdown from '../dropdown/dropdown';

import dropdownItemsClassNames from '../../../assets/css/blocks/dropdowns/dropdown-items/dropdown-items.css';

class DropdownItems extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItemId: null,
    };

    this.renderItems = this.renderItems.bind(this);
  }

  /**
   * @returns {Object}
   */
  renderItems() {
    const { itemsClassName } = this.props;

    const dropdownItemsClassName = classnames(dropdownItemsClassNames['dropdown-items'], itemsClassName);

    return (
      <ul className={dropdownItemsClassName}>
        <li className={dropdownItemsClassNames['dropdown-items__item']}>
          Option 1
        </li>
        <li className={dropdownItemsClassNames['dropdown-items__item']}>
          Option 2
        </li>
      </ul>
    );
  }

  render() {
    const { className, children } = this.props;

    return (
      <Dropdown className={className} renderItems={this.renderItems}>
        {children}
      </Dropdown>
    );
  }
}

DropdownItems.defaultProps = Object.assign(Dropdown.defaultProps, {
  itemsClassName: '',
});

DropdownItems.propTypes = Object.assign(Dropdown.propTypes, {
  itemsClassName: React.PropTypes.string,
});

export default DropdownItems;

