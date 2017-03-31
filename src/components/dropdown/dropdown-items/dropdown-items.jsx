import React from 'react';

import Dropdown from '../dropdown/dropdown';
import DropdownItem from './dropdown-item/dropdown-item';

import dropdownItemsClassNames from '../../../assets/css/blocks/dropdown/dropdown-items/dropdown-items.css';

class DropdownItems extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItemId: null,
    };

    this.onActiveItemIdSelect = this.onActiveItemIdSelect.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  /**
   * @param {Number} id
   */
  onActiveItemIdSelect(id) {
    if (id !== this.state.activeItemId) {
      this.setState({
        activeItemId: id,
      });
    }
  }

  /**
   * @returns {Object}
   */
  renderItems() {
    const { activeItemId } = this.state;
    const { items, renderContentAfter, renderContent } = this.props;

    const dropdownItems = items.map((item) => {
      const { className, id, title, content } = item;

      return (
        <DropdownItem
          className={className}
          id={id}
          title={title}
          isActive={id === activeItemId}
          key={id}
          onClick={this.onActiveItemIdSelect}
        >
          {content}
        </DropdownItem>
      );
    });

    return (
      <ul className={dropdownItemsClassNames['dropdown-items']}>
        {!renderContentAfter && renderContent && renderContent()}
        {dropdownItems}
        {renderContentAfter && renderContent && renderContent()}
      </ul>
    );
  }

  render() {
    const { className, itemsClassName, children } = this.props;

    return (
      <Dropdown className={className} itemsClassName={itemsClassName} renderContent={this.renderItems}>
        {children}
      </Dropdown>
    );
  }
}

DropdownItems.defaultProps = Object.assign(Dropdown.defaultProps, {
  items: [],
  renderContentAfter: false,
  renderContent: null,
});

DropdownItems.propTypes = Object.assign(Dropdown.propTypes, {
  items: React.PropTypes.array,
  renderContentAfter: React.PropTypes.bool,
  renderContent: React.PropTypes.func,
});

export default DropdownItems;

