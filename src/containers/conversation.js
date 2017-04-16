import React from 'react';

import { USER_PERMISSION } from '../constants/user';

import Permit from '../components/permit/permit';
import Chat from '../components/chat/chat';
import Panel from '../components/panel/panel';

import chatClassNames from '../assets/css/containers/conversation/conversation.css';

export default class Conversation extends React.Component {

  static propTypes = {
    match: React.PropTypes.object,
  };

  static defaultProps = {
    match: {},
  };

  componentWillMount() {
    // Set conversation id to redux store
  }

  render() {
    return (
      <Permit permission={USER_PERMISSION.BASIC}>
        <div className={chatClassNames.conversation}>
          <Panel className={chatClassNames.conversation__panel} />
          <Chat className={chatClassNames.conversation__chat} />
        </div>
      </Permit>
    );
  }
}
