import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { push } from 'react-router-redux';

import { uniqueId } from 'lodash';

import routes from '../../../constants/routes/routes';
import { CHAT_TYPES } from '../../../constants/chat';

import { getFriends } from '../../../action-types/friends';
import { createChat } from '../../../action-types/chats';

import SearchInput from '../../search/search-input/search-input';
import PanelFriendsItem from './panel-friends-item/panel-friends-item';

import panelFriendsClassNames from './panel-friends.css';

/**
 * @param {Object} Friends
 * @param {Object} Chats
 * @returns {Object}
 */
const mapStateToProps = ({ Friends, Chats }) => ({
  friends: Friends.getFriends(),
  chats: Chats.getChats(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendsAction: getFriends,
    createChatAction: createChat,
    pushAction: push,
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
    getFriendsAction: React.PropTypes.func.isRequired,
    createChatAction: React.PropTypes.func.isRequired,
    pushAction: React.PropTypes.func.isRequired,
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
  createChat(user) {
    const { chats, createChatAction, pushAction } = this.props;

    const email = user.getEmail();
    if (user) {
      const members = {
        email,
      };

      const createdChat = chats
        .filter(chat => chat.getType() === CHAT_TYPES.INDIVIDUAL)
        .find(chat => chat.getMembers().find(member => member.getEmail() === email));
      if (createdChat) {
        const chatId = createdChat.getId();
        const redirectTo = `${routes.conversation.url.base}${routes.conversation.url.specific.replace(/:id\?/, chatId)}`;

        pushAction(redirectTo);
      } else {
        createChatAction('', CHAT_TYPES.INDIVIDUAL, [members]);
      }
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
          onSelect={this.createChat}
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
