import React from 'react';

import Dropdown from '../dropdown/dropdown';
import DropdownItem from './dropdown-item/dropdown-item';

import dropdownItemsClassNames from '../../../assets/css/blocks/dropdown/dropdown-items/dropdown-items.css';

class DropdownItems extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onActiveItemIdSelect = this.onActiveItemIdSelect.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  /**
   * @param {Number} id
   */
  onActiveItemIdSelect(id) {
    const { activeItemId, onItemSelect } = this.props;
    if (id !== activeItemId && onItemSelect) {
      onItemSelect(id);
    }
  }

  /**
   * @returns {Object}
   */
  renderItems() {
    const { items, activeItemId, renderContentAfter, renderContent } = this.props;

    const dropdownItems = items.map((item) => {
      const { className, id, title, content } = item;

      return (
        <DropdownItem
          className={className}
          id={id}
          title={title}
          isActive={id === activeItemId}
          onClick={this.onActiveItemIdSelect}
          key={id}
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
    const { className, itemsClassName, children, isStickToBottom, isOpen, onToggle } = this.props;

    return (
      <Dropdown
        className={className}
        itemsClassName={itemsClassName}
        renderContent={this.renderItems}
        isStickToBottom={isStickToBottom}
        isOpen={isOpen}
        onToggle={onToggle}
      >
        {children}
      </Dropdown>
    );
  }
}

DropdownItems.defaultProps = Object.assign(Dropdown.defaultProps, {
  items: [],
  activeItemId: null,
  renderContentAfter: false,
  renderContent: null,
  onItemSelect: null,
});

DropdownItems.propTypes = Object.assign(Dropdown.propTypes, {
  items: React.PropTypes.array,
  activeItemId: React.PropTypes.number,
  renderContentAfter: React.PropTypes.bool,
  renderContent: React.PropTypes.func,
  onItemSelect: React.PropTypes.func,
});

export default DropdownItems;

