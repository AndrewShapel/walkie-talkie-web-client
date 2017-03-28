import React from 'react';

import Dropdown from '../dropdown/dropdown';
import DropdownItem from './dropdown-item/dropdown-item';

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
    const items = this.props.items.map((item) => {
      const id = item.id;
      const title = item.title;

      return (
        <DropdownItem id={id} title={title} key={id} />
      );
    });

    return (
      <ul className={dropdownItemsClassNames['dropdown-items']}>
        {items}
      </ul>
    );
  }

  render() {
    const { className, itemsClassName, children } = this.props;

    return (
      <Dropdown className={className} itemsClassName={itemsClassName} renderItems={this.renderItems}>
        {children}
      </Dropdown>
    );
  }
}

DropdownItems.defaultProps = Object.assign(Dropdown.defaultProps, {
  items: [],
});

DropdownItems.propTypes = Object.assign(Dropdown.propTypes, {
  items: React.PropTypes.array,
});

export default DropdownItems;

