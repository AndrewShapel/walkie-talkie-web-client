import React from 'react';

import { connect } from 'react-redux';

import { uniqueId } from 'lodash';

import User from '../../user/user';
import SearchInputExpand from '../../search/search-input-expand/search-input-expand';
import CallActions from '../../call/call-actions/call-actions';

import chatHeaderClassNames from './chat-header.css';

/**
 * @param {Object} Conversations
 * @param {Object} Chats
 */
const mapStateToProps = ({ Conversations, Chats }) => {
  const activeConversationId = Conversations.getActiveId();
  return {
    activeChat: Chats.getChatById(activeConversationId),
  };
};

@connect(mapStateToProps, null)
export default class ChatHeader extends React.Component {

  static propTypes = {
    activeChat: React.PropTypes.object,
  };

  static defaultProps = {
    activeChat: null,
  };

  /**
   * @param {Object} members
   * @returns {Object}
   */
  static renderMembers(members) {
    return members.map((member) => {
      const key = uniqueId('member_');

      return (
        <User
          className={chatHeaderClassNames['chat-header__user']}
          user={member}
          key={key}
        />
      );
    });
  }

  render() {
    const { activeChat } = this.props;

    const members = (activeChat)
      ? ChatHeader.renderMembers(activeChat.getMembers())
      : null;

    return (
      <div className={chatHeaderClassNames['chat-header']}>
        <div className={chatHeaderClassNames['chat-header__members']}>
          {members}
        </div>
        <div className={chatHeaderClassNames['chat-header__search']}>
          <SearchInputExpand />
        </div>
        <CallActions />
      </div>
    );
  }
}
