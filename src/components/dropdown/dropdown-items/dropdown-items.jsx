import React from 'react';
import autobind from 'autobind-decorator';

import Dropdown from '../dropdown/dropdown';
import DropdownItem from './dropdown-item/dropdown-item';

import dropdownItemsClassNames from './dropdown-items.css';

export default class DropdownItems extends React.PureComponent {

  static propTypes = Object.assign({}, Dropdown.propTypes, {
    items: React.PropTypes.array,
    activeItemId: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    renderContentAfter: React.PropTypes.bool,
    renderContent: React.PropTypes.func,
    onItemSelect: React.PropTypes.func,
  });

  static defaultProps = Object.assign({}, Dropdown.defaultProps, {
    items: [],
    activeItemId: '',
    renderContentAfter: false,
    renderContent: null,
    onItemSelect: null,
  });

  /**
   * @param {Number} id
   */
  @autobind
  onActiveItemIdSelect(id) {
    const { activeItemId, onItemSelect } = this.props;
    if (id !== activeItemId && onItemSelect) {
      onItemSelect(id);
    }
  }

  /**
   * @returns {Object}
   */
  @autobind
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
