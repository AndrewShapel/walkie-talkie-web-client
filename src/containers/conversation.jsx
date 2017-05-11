import React from 'react';

import routes from '../constants/routes/routes';
import { USER_PERMISSION } from '../constants/user';

import Permit from '../components/permit/permit';
import Chat from '../components/chat/chat';
import Panel from '../components/panel/panel';

import chatClassNames from '../assets/css/containers/conversation/conversation.css';

export default class Conversation extends React.Component {

  static propTypes = {
    history: React.PropTypes.object,
  };

  static defaultProps = {
    history: {},
  };

  componentWillMount() {
    // Set conversation id to redux store
  }

  render() {
    const { history } = this.props;

    return (
      <Permit
        className={chatClassNames.conversation}
        permission={USER_PERMISSION.BASIC}
        history={history}
        redirectTo={`${routes.userVerification.url.base}${routes.userVerification.url.signin}`}
      >
        <Panel className={chatClassNames.conversation__panel} />
        <Chat className={chatClassNames.conversation__chat} />
      </Permit>
    );
  }
}
