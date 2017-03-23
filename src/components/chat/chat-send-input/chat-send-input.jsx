import React from 'react';
import classnames from 'classnames';

import chatSendInputClassNames from '../../../assets/css/blocks/chat/chat-send-input/chat-send-input.css';

class ChatSendInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      rows: 0,
    };

    /**
     * @type {Number}
     */
    this.baseHeight = 0;

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const rows = this.props.rows;

    if (this.state.rows !== rows) {
      this.setState({
        rows,
      });
    }
  }

  componentDidMount() {
    if (this.textArea) {
      this.baseHeight = this.textArea.scrollHeight;
    }
  }

  onChange() {
    if (this.textArea) {
      const rows = this.state.rows;
      const minRows = this.props.minRows;

      const scrollHeight = this.textArea.scrollHeight;
      const recalculatedRows = Math.ceil((scrollHeight - this.baseHeight) / 17);
      const updatedRows = minRows + recalculatedRows;

      if (updatedRows !== rows) {
        this.setState({
          rows: updatedRows,
        });
      }
    }
  }

  render() {
    const { rows } = this.state;
    const { className } = this.props;

    const sendInputClassName = classnames(chatSendInputClassNames['chat-send-input'], className);

    return (
      <div className={sendInputClassName}>
        <textarea
          rows={rows}
          className={chatSendInputClassNames['chat-send-input__text-area']}
          placeholder="Type message..."
          type="text"
          onChange={this.onChange}
          ref={(node) => { this.textArea = node; }}
        />
        <object className={chatSendInputClassNames['chat-send-input__icon']} data="assets/icons/svg/quill.svg" type="image/svg+xml" />
      </div>
    );
  }
}

ChatSendInput.defaultProps = {
  className: '',
  rows: 1,
  minRows: 1,
};

ChatSendInput.propTypes = {
  className: React.PropTypes.string,
  rows: React.PropTypes.number,
  minRows: React.PropTypes.number,
};

export default ChatSendInput;
