import React from 'react';

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
    console.log(this.props.match.params.id, 'tr');
    // Set conversation id to redux store
  }

  render() {
    return (
      <div className={chatClassNames.conversation}>
        <Panel className={chatClassNames.conversation__panel} />
        <Chat className={chatClassNames.conversation__chat} />
      </div>
    );
  }
}
