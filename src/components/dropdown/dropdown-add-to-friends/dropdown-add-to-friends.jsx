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

  static renderSearchInput() {
    return (
      <div className={dropdownAddToFriendsClassNames['dropdown-add-to-friends__search-input-container']}>
        <SearchInput className={dropdownAddToFriendsClassNames['dropdown-add-to-friends__search-input']} />
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
        renderContent={DropdownAddToFriends.renderSearchInput}
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
