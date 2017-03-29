import React from 'react';
import classnames from 'classnames';

import SearchInput from '../../search/search-input/search-input';
import PanelFriendsItem from './panel-friends-item/panel-friends-item';

import panelFriendsClassNames from '../../../assets/css/blocks/panel/panel-friends/panel-friends.css';

const PanelFriends = ({ className }) => {
  const friendsClassName = classnames(panelFriendsClassNames['panel-friends'], className);

  return (
    <ul className={friendsClassName}>
      <SearchInput className={panelFriendsClassNames['panel-friends__search-input']} />
      <PanelFriendsItem isActive />
      <PanelFriendsItem />
    </ul>
  );
};

PanelFriends.defaultProps = {
  className: '',
};

PanelFriends.propTypes = {
  className: React.PropTypes.string,
};

export default PanelFriends;

