import React from 'react';

import Keyboard from '../../../utils/keyboard';

import { KEYBOARD_KEYS } from '../../../constants/common';

import SearchInput from '../../search/search-input/search-input';
import User from '../../user/user';
import DropdownItems from '../dropdown-items/dropdown-items';

import dropdownAddToFriendsClassNames from '../../../assets/css/blocks/dropdown/dropdown-add-to-friends/dropdown-add-to-friends.css';

class DropdownAddToFriends extends React.Component {
  /**
   * @param {String} className
   * @returns {Array}
   */
  static getItems(className) {
    return [{
      className,
      id: 0,
      content: (
        <User
          userName="Friend to Add"
        />
      ),
    }, {
      className,
      id: 1,
      content: (
        <User
          userName="Another friend to add"
        />
      ),
    }];
  }

  /**
   * @param {Array} items
   * @param {Number} activeItemId
   * @param {Boolean} isNext
   * @return {Object|Undefined}
   */
  static getAdjacentItem(items, activeItemId, isNext = true) {
    const currentItemIndex = items.findIndex(item => item.id === activeItemId);
    const adjacentItemIndex = (isNext) ? currentItemIndex + 1 : currentItemIndex - 1;

    return items[adjacentItemIndex];
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      activeItemId: null,
      isSearchInputInFocus: false,
    };

    this.onToggle = this.onToggle.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onSearchInputFocus = this.onSearchInputFocus.bind(this);
    this.onSearchInputBlur = this.onSearchInputBlur.bind(this);
    this.renderSearchInput = this.renderSearchInput.bind(this);
  }

  /**
   * @param {Object} event
   */
  onKeyUp(event) {
    const { isOpen, activeItemId, isSearchInputInFocus } = this.state;

    if (isSearchInputInFocus) {
      const nextState = Object.assign(this.state);

      const pressedKeyName = Keyboard.getKeyName(event.keyCode);
      const items = DropdownAddToFriends.getItems();

      if (pressedKeyName === KEYBOARD_KEYS.ARROW_UP) {
        const previousItem = DropdownAddToFriends.getAdjacentItem(items, activeItemId, false);
        if (previousItem) {
          nextState.activeItemId = previousItem.id;
        }
      } else if (pressedKeyName === KEYBOARD_KEYS.ARROW_DOWN) {
        const nextItem = DropdownAddToFriends.getAdjacentItem(items, activeItemId, true);
        if (nextItem) {
          nextState.activeItemId = nextItem.id;
        }
      } else if (pressedKeyName === KEYBOARD_KEYS.ENTER) {
        nextState.isOpen = false;
      }

      if (nextState.activeItemId !== activeItemId || nextState.isOpen !== isOpen) {
        this.setState(nextState);
      }
    }
  }

  /**
   * @param {Boolean} isDropdownOpen
   */
  onToggle(isDropdownOpen) {
    const { isOpen } = this.state;
    if (isDropdownOpen !== isOpen) {
      this.setState({
        isOpen: isDropdownOpen,
      });
    }
  }

  /**
   * @param {Number} itemId
   */
  onItemSelect(itemId) {
    this.setState({
      isOpen: false,
      activeItemId: itemId,
    });
  }

  onSearchInputFocus() {
    this.changeSearchInputFocusBlur(true);
  }

  onSearchInputBlur() {
    this.changeSearchInputFocusBlur(false);
  }

  /**
   * @param {Boolean} isInFocus
   */
  changeSearchInputFocusBlur(isInFocus) {
    const { isSearchInputInFocus } = this.state;

    if (isSearchInputInFocus !== isInFocus) {
      this.setState({
        isSearchInputInFocus: isInFocus,
      });
    }
  }

  renderSearchInput() {
    return (
      <div className={dropdownAddToFriendsClassNames['dropdown-add-to-friends__search-input-container']}>
        <SearchInput
          className={dropdownAddToFriendsClassNames['dropdown-add-to-friends__search-input']}
          onFocus={this.onSearchInputFocus}
          onBlur={this.onSearchInputBlur}
        />
      </div>
    );
  }

  render() {
    const { isOpen, activeItemId } = this.state;
    const { itemsClassName, children } = this.props;

    const itemClassName = dropdownAddToFriendsClassNames['dropdown-add-to-friends__item'];

    return (
      <div className={dropdownAddToFriendsClassNames['dropdown-add-to-friends']} onKeyUp={this.onKeyUp}>
        <DropdownItems
          className={dropdownAddToFriendsClassNames['dropdown-add-to-friends__items']}
          itemsClassName={itemsClassName}
          items={DropdownAddToFriends.getItems(itemClassName)}
          activeItemId={activeItemId}
          renderContent={this.renderSearchInput}
          isOpen={isOpen}
          onItemSelect={this.onItemSelect}
          onToggle={this.onToggle}
        >
          {children}
        </DropdownItems>
      </div>
    );
  }
}

DropdownAddToFriends.defaultProps = Object.assign(DropdownItems.defaultProps, {
  itemsClassName: '',
});

DropdownAddToFriends.propTypes = Object.assign(DropdownItems.propTypes, {
  itemsClassName: React.PropTypes.string,
});

export default DropdownAddToFriends;
