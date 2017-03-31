import React from 'react';

import SearchInput from '../../search/search-input/search-input';
import User from '../../user/user';
import DropdownItems from '../dropdown-items/dropdown-items';

import dropdownAddToFriendsClassNames from '../../../assets/css/blocks/dropdown/dropdown-add-to-friends/dropdown-add-to-friends.css';

class DropdownAddToFriends extends React.PureComponent {
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
    }];
  }

  constructor(props) {
    super(props);

    this.state = {
      isSearchInputInFocus: false,
    };

    this.onSearchInputFocus = this.onSearchInputFocus.bind(this);
    this.onSearchInputBlur = this.onSearchInputBlur.bind(this);
    this.renderSearchInput = this.renderSearchInput.bind(this);
  }

  /**
   * @param {Boolean} isInFocus
   */
  onSearchInputFocusBlur(isInFocus) {
    const { isSearchInputInFocus } = this.state;

    if (isSearchInputInFocus !== isInFocus) {
      this.setState({
        isSearchInputInFocus: isInFocus,
      });
    }
  }

  onSearchInputFocus() {
    this.onSearchInputFocusBlur(true);
  }

  onSearchInputBlur() {
    this.onSearchInputFocusBlur(false);
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
    const { itemsClassName, children } = this.props;

    const itemClassName = dropdownAddToFriendsClassNames['dropdown-add-to-friends__item'];

    return (
      <DropdownItems
        className={dropdownAddToFriendsClassNames['dropdown-add-to-friends']}
        itemsClassName={itemsClassName}
        items={DropdownAddToFriends.getItems(itemClassName)}
        renderContent={this.renderSearchInput}
      >
        {children}
      </DropdownItems>
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
