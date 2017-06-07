import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import routes from '../constants/routes/routes';
import { USER_PERMISSION } from '../constants/user';

import { setActiveId, resetActiveId } from '../action-types/conversations';
import { getChats } from '../action-types/chats';

import Permit from '../components/permit/permit';
import Chat from '../components/chat/chat';
import Panel from '../components/panel/panel';

import chatClassNames from '../assets/css/containers/conversation/conversation.css';

/**
 * @param {Object} Conversations
 * @returns {Object}
 */
const mapStateToProps = ({ Conversations }) => ({
  activeConversationId: Conversations.getActiveId(),
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
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class Conversation extends React.Component {

  static propTypes = {
    match: React.PropTypes.object,
    history: React.PropTypes.object,
    activeConversationId: React.PropTypes.string.isRequired,
    setActiveConversationIdAction: React.PropTypes.func.isRequired,
    resetActiveConversationIdAction: React.PropTypes.func.isRequired,
    getChatsAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    match: {},
    history: {},
  };

  componentWillMount() {
    const { match, activeConversationId, setActiveConversationIdAction, resetActiveConversationIdAction, getChatsAction } = this.props;

    if (match) {
      const conversationId = match.params.id;
      if (conversationId && conversationId !== activeConversationId) {
        setActiveConversationIdAction(conversationId);
      } else {
        resetActiveConversationIdAction();
      }
    }

    getChatsAction();
  }

  componentWillUpdate(nextProps) {
    const { activeConversationId } = this.props;

    if (activeConversationId !== nextProps.activeConversationId) {
      // getChatsAction();
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
      </Permit>
    );
  }
}
