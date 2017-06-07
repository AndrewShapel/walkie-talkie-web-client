import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uniqueId } from 'lodash';

import { CHAT_TYPES } from '../../../constants/chat';

import { getFriends } from '../../../action-types/friends';
import { createChat } from '../../../action-types/chats';

import SearchInput from '../../search/search-input/search-input';
import PanelFriendsItem from './panel-friends-item/panel-friends-item';

import panelFriendsClassNames from './panel-friends.css';

/**
 * @param {Object} Friends
 * @returns {Object}
 */
const mapStateToProps = ({ Friends }) => ({
  friends: Friends.getFriends(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendsAction: getFriends,
    createChatAction: createChat,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelFriends extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    itemClassName: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
    friends: React.PropTypes.object.isRequired,
    getFriendsAction: React.PropTypes.func.isRequired,
    createChatAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
    itemClassName: '',
    searchInputClassName: '',
  };

  componentWillMount() {
    const { getFriendsAction } = this.props;

    getFriendsAction();
  }

  /**
   * @param {Object} user
   */
  createChat(user) {
    const { createChatAction } = this.props;

    const email = user.getEmail();
    if (email) {
      createChatAction('', CHAT_TYPES.INDIVIDUAL, email);
    }
  }

  /**
   * @param {String} filter
   */
  @autobind
  filterFriends(filter) {
    console.log(this, filter);
  }

  /**
   * @param {String} className
   * @param {Object} friends
   * @returns {Object}
   */
  renderFriends(className, friends) {
    return friends.map((friend) => {
      const key = uniqueId('friend_');
      return (
        <PanelFriendsItem
          className={className}
          user={friend}
          onClick={this.createChat}
          key={key}
        />
      );
    });
  }

  render() {
    const { className, itemClassName, searchInputClassName, friends } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
          onChange={this.filterFriends}
        />
        <div className={panelFriendsClassNames['panel-friends__friends']}>
          { this.renderFriends(itemClassName, friends) }
        </div>
      </ul>
    );
  }
}
