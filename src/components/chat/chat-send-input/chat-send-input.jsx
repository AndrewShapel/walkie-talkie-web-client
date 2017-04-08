import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { ICONS } from '../../../constants/icons';

import Svg from '../../svg/svg';

import chatSendInputClassNames from './chat-send-input.css';

class ChatSendInput extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    rows: React.PropTypes.number,
    minRows: React.PropTypes.number,
  };

  static defaultProps = {
    className: '',
    rows: 1,
    minRows: 1,
  };

  state = {
    value: '',
    rows: 0,
  };

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

  @autobind
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

  /**
   * @type {Number}
   */
  baseHeight = 0;

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
        <Svg className={chatSendInputClassNames['chat-send-input__icon']} icon={ICONS.QUILL} />
      </div>
    );
  }
}

export default ChatSendInput;
