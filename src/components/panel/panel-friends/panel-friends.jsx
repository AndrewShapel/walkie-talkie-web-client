import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uniqueId } from 'lodash';

import { CHAT_TYPES } from '../../../constants/chat';

import { getFriends } from '../../../action-types/friends';
import { openChat } from '../../../action-types/chats';

import SearchInput from '../../search/search-input/search-input';
import PanelFriendsItem from './panel-friends-item/panel-friends-item';

import panelFriendsClassNames from './panel-friends.css';

/**
 * @param {Object} Friends
 * @param {Object} Chats
 * @param {Object} Conversations
 * @returns {Object}
 */
const mapStateToProps = ({ Friends, Chats, Conversations }) => ({
  friends: Friends.getFriends(),
  chats: Chats,
  activeConversationId: Conversations.getActiveId(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendsAction: getFriends,
    openChatAction: openChat,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelFriends extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    itemClassName: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
    friends: React.PropTypes.object.isRequired,
    chats: React.PropTypes.object.isRequired,
    activeConversationId: React.PropTypes.string.isRequired,
    getFriendsAction: React.PropTypes.func.isRequired,
    openChatAction: React.PropTypes.func.isRequired,
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
  @autobind
  openChat(user) {
    const { openChatAction } = this.props;

    if (user) {
      const email = user.getEmail();
      openChatAction([email], CHAT_TYPES.INDIVIDUAL);
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
   * @param {String} chats
   * @param {String} activeConversationId
   * @returns {Object}
   */
  renderFriends(className, friends, chats, activeConversationId) {
    return friends.map((friend) => {
      const createdChat = chats
        .getChatsByMemberEmail(friend.getEmail())
        .find(chat => chat.getType() === CHAT_TYPES.INDIVIDUAL);
      const isActive = createdChat && createdChat.getId() === activeConversationId;
      const key = uniqueId('friend_');

      return (
        <PanelFriendsItem
          className={className}
          user={friend}
          isActive={isActive}
          onSelect={this.openChat}
          key={key}
        />
      );
    });
  }

  render() {
    const { className, itemClassName, searchInputClassName, friends, chats, activeConversationId } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
          onChange={this.filterFriends}
        />
        <div className={panelFriendsClassNames['panel-friends__friends']}>
          { this.renderFriends(itemClassName, friends, chats, activeConversationId) }
        </div>
      </ul>
    );
  }
}
