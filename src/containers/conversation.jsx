import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import routes from '../constants/routes/routes';
import { USER_PERMISSION } from '../constants/user';

import { setActiveId, resetActiveId } from '../action-types/conversations';
import { getChats } from '../action-types/chats';
import { open, signIn, offerChat } from '../action-types/connections';

import Permit from '../components/permit/permit';
import Chat from '../components/chat/chat';
import Panel from '../components/panel/panel';
import CallPopup from '../components/call/call-popup/call-popup';

import chatClassNames from '../assets/css/containers/conversation/conversation.css';

/**
 * @param {Object} Conversations
 * @param {Object} Chats
 * @param {Object} Friends
 * @param {Object} Connection
 * @returns {Object}
 */
const mapStateToProps = ({ Conversations, Chats, Friends, Connections }) => ({
  activeConversationId: Conversations.getActiveId(),
  chats: Chats.getChats(),
  friends: Friends.getFriends(),
  peers: Connections.getPeers(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setActiveConversationIdAction: setActiveId,
    resetActiveConversationIdAction: resetActiveId,
    getChatsAction: getChats,
    openConnectionsAction: open,
    signInAction: signIn,
    offerChatAction: offerChat,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class Conversation extends React.Component {

  static propTypes = {
    match: React.PropTypes.object,
    history: React.PropTypes.object,
    activeConversationId: React.PropTypes.string.isRequired,
    friends: React.PropTypes.object.isRequired,
    peers: React.PropTypes.object.isRequired,
    setActiveConversationIdAction: React.PropTypes.func.isRequired,
    resetActiveConversationIdAction: React.PropTypes.func.isRequired,
    getChatsAction: React.PropTypes.func.isRequired,
    openConnectionsAction: React.PropTypes.func.isRequired,
    signInAction: React.PropTypes.func.isRequired,
    offerChatAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    match: {},
    history: {},
  };

  componentWillMount() {
    const {
      match,
      activeConversationId,
      setActiveConversationIdAction,
      resetActiveConversationIdAction,
      getChatsAction,
      openConnectionsAction,
    } = this.props;

    if (match) {
      const conversationId = match.params.id;
      if (conversationId && conversationId !== activeConversationId) {
        setActiveConversationIdAction(conversationId);
      } else {
        resetActiveConversationIdAction();
      }
    }

    getChatsAction();
    openConnectionsAction();
  }

  componentWillUpdate(nextProps) {
    const { match, activeConversationId, friends, peers, setActiveConversationIdAction, signInAction, offerChatAction } = this.props;

    const nextMatch = nextProps.match;
    const nextFriends = nextProps.friends;
    const nextActiveConversationId = nextProps.activeConversationId;
    const nextPeers = nextProps.peers;

    if (match && nextMatch) {
      const conversationId = match.params.id;
      const nextConversationId = nextMatch.params.id;

      if (nextConversationId !== conversationId) {
        setActiveConversationIdAction(nextConversationId);
      }
    }

    if (nextFriends.size > friends.size && !friends.size) {
      const friendsEmails = nextFriends.map(friend => friend.getEmail()).toArray();
      signInAction(friendsEmails);
    }

    if (nextActiveConversationId !== activeConversationId && peers && nextPeers.size > 0) {
      offerChatAction(nextActiveConversationId);
    }
  }

  render() {
    const { history, activeConversationId } = this.props;

    return (
      <Permit
        className={chatClassNames.conversation}
        permission={USER_PERMISSION.BASIC}
        history={history}
        redirectTo={`${routes.userVerification.url.base}${routes.userVerification.url.signin}`}
      >
        <Panel className={chatClassNames.conversation__panel} />
        <Chat
          className={chatClassNames.conversation__chat}
          isEmpty={!activeConversationId}
        />
        <CallPopup />
      </Permit>
    );
  }
}
