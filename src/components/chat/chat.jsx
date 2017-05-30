import React from 'react';
import classnames from 'classnames';

import chatClassNames from './chat.css';

import ChatHeader from './chat-header/chat-header';
import ChatContent from './chat-content/chat-content';

export default class Chat extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    isEmpty: React.PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    isEmpty: true,
  };

  render() {
    const { className, isEmpty } = this.props;

    const chatClassName = classnames(chatClassNames.chat, {
      [chatClassNames.chat_empty]: isEmpty,
    }, className);

    const content = (isEmpty)
      ? (
        <span className={chatClassNames.chat__title}>
          Select your friend to start a conversation
        </span>
      )
      : (
        <div>
          <ChatHeader />
          <ChatContent className={chatClassNames.chat__content} />
        </div>
      );

    return (
      <div className={chatClassName}>
        {content}
      </div>
    );
  }
}
