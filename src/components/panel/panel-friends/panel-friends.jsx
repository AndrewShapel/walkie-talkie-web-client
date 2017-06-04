import React from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFriends } from '../../../action-types/friends';

import SearchInput from '../../search/search-input/search-input';
import PanelFriendsItem from './panel-friends-item/panel-friends-item';

import panelFriendsClassNames from './panel-friends.css';

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendsAction: getFriends,
  }, dispatch)
);

@connect(null, mapDispatchToProps)
export default class PanelFriends extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    getFriendsAction: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    getFriendsAction: null,
  };

  componentWillMount() {
    const { getFriendsAction } = this.props;

    getFriendsAction();
  }

  render() {
    const { className } = this.props;

    const friendsClassName = classnames(panelFriendsClassNames['panel-friends'], className);

    return (
      <ul className={friendsClassName}>
        <SearchInput className={panelFriendsClassNames['panel-friends__search-input']} />
        <PanelFriendsItem isActive />
        <PanelFriendsItem />
      </ul>
    );
  }
}
