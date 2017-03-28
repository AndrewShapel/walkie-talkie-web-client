import React from 'react';
import classnames from 'classnames';

import DropdownItems from '../dropdown-items/dropdown-items';

import dropdownAddToFriendsClassNames from '../../../assets/css/blocks/dropdown/dropdown-add-to-friends/dropdown-add-to-friends.css';

const DropdownAddToFriends = ({ itemsClassName, children }) => {
  const items = [{
    className: '',
    id: 0,
    content: <span>245</span>,
  }, {
    id: 1,
    title: 'Option 2',
  }];

  const dropdownItemsClassName = classnames(dropdownAddToFriendsClassNames['dropdown-add-to-friends__items'], itemsClassName);

  return (
    <DropdownItems
      className={dropdownAddToFriendsClassNames['dropdown-add-to-friends']}
      itemsClassName={dropdownItemsClassName}
      items={items}
    >
      {children}
    </DropdownItems>
  );
};

DropdownAddToFriends.defaultProps = Object.assign(DropdownItems.defaultProps, {
  itemsClassName: '',
});

DropdownAddToFriends.propTypes = Object.assign(DropdownItems.propTypes, {
  itemsClassName: React.PropTypes.string,
});

export default DropdownAddToFriends;
