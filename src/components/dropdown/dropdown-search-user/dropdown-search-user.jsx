import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Keyboard from '../../../utils/keyboard';

import { KEYBOARD_KEYS } from '../../../constants/keyboard';

import { getUsers } from '../../../action-types/users';

import SearchInput from '../../search/search-input/search-input';
import User from '../../user/user';
import DropdownItems from '../dropdown-items/dropdown-items';

import dropdownSearchUserClassNames from './dropdown-search-user.css';

/**
 * @param {Object} Users
 * @returns {Object}
 */
const mapStateToProps = ({ Users }) => ({
  users: Users.getUsers(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getUsersAction: getUsers,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
class DropdownSearchUser extends React.Component {

  static propTypes = Object.assign({}, DropdownItems.propTypes, {
    itemsClassName: React.PropTypes.string,
    users: React.PropTypes.object.isRequired,
    getUsersAction: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func,
  });

  static defaultProps = Object.assign({}, DropdownItems.defaultProps, {
    itemsClassName: '',
    onSelect: null,
  });

  /**
   * @param {Object} users
   * @returns {Array}
   */
  static getItems(users) {
    const itemClassName = dropdownSearchUserClassNames['dropdown-search-user__item'];

    return users.map((user) => {
      const email = user.getEmail();

      return {
        className: itemClassName,
        id: email,
        content: (
          <User user={user} isShort />
        ),
      };
    }).toArray();
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

  state = {
    isOpen: false,
    activeItemId: '',
    isSearchInputInFocus: false,
  };

  componentWillMount() {
    const { getUsersAction } = this.props;

    getUsersAction();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;

    const searchInput = this.searchInput;
    if (isOpen !== prevState.isOpen && searchInput) {
      const searchInputRef = searchInput.getRef();
      if (searchInputRef) {
        searchInputRef.focus();
      }
    }
  }

  /**
   * @param {Boolean} isDropdownOpen
   */
  @autobind
  onToggle(isDropdownOpen) {
    const { isOpen } = this.state;
    if (isDropdownOpen !== isOpen) {
      this.setState({
        isOpen: isDropdownOpen,
      });
    }
  }

  /**
   * @param {Object} event
   */
  @autobind
  onKeyUp(event) {
    const { isOpen, activeItemId, isSearchInputInFocus } = this.state;
    const { users } = this.props;

    if (isSearchInputInFocus) {
      const nextState = Object.assign(this.state);

      const pressedKeyName = Keyboard.getKeyName(event.keyCode);
      const items = DropdownSearchUser.getItems(users);

      if (pressedKeyName === KEYBOARD_KEYS.ARROW_UP) {
        const previousItem = DropdownSearchUser.getAdjacentItem(items, activeItemId, false);
        if (previousItem) {
          nextState.activeItemId = previousItem.id;
        }
      } else if (pressedKeyName === KEYBOARD_KEYS.ARROW_DOWN) {
        const nextItem = DropdownSearchUser.getAdjacentItem(items, activeItemId, true);
        if (nextItem) {
          nextState.activeItemId = nextItem.id;
        }
      } else if (pressedKeyName === KEYBOARD_KEYS.ENTER) {
        this.onItemSelect(activeItemId);
      }

      if (nextState.activeItemId !== activeItemId || nextState.isOpen !== isOpen) {
        this.setState(nextState);
      }
    }
  }

  /**
   * @param {Number} itemId
   */
  @autobind
  onItemSelect(itemId) {
    const { onSelect } = this.props;

    this.setState({
      isOpen: false,
      activeItemId: '',
    });

    if (onSelect) {
      onSelect(itemId);
    }
  }

  @autobind
  onSearchInputFocus() {
    this.changeSearchInputFocusBlur(true);
  }

  @autobind
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

  @autobind
  renderSearchInput() {
    return (
      <div className={dropdownSearchUserClassNames['dropdown-search-user__search-input-container']}>
        <SearchInput
          className={dropdownSearchUserClassNames['dropdown-search-user__search-input']}
          onFocus={this.onSearchInputFocus}
          onBlur={this.onSearchInputBlur}
          ref={(node) => { this.searchInput = node; }}
        />
      </div>
    );
  }

  render() {
    const { isOpen, activeItemId } = this.state;
    const { itemsClassName, users, children, isStickToBottom } = this.props;

    return (
      <div className={dropdownSearchUserClassNames['dropdown-search-user']} onKeyUp={this.onKeyUp}>
        <DropdownItems
          className={dropdownSearchUserClassNames['dropdown-search-user__items']}
          itemsClassName={itemsClassName}
          items={DropdownSearchUser.getItems(users)}
          activeItemId={activeItemId}
          renderContent={this.renderSearchInput}
          isStickToBottom={isStickToBottom}
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

export default DropdownSearchUser;
