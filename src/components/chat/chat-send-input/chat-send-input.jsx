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
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    rows: 1,
    minRows: 1,
    onSelect: null,
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

  /**
   * @param {Object} event
   */
  @autobind
  onChange(event) {
    if (this.textArea) {
      const { value, rows } = this.state;
      const { minRows } = this.props;

      const updatedState = Object.assign({}, this.state);

      const scrollHeight = this.textArea.scrollHeight;
      const recalculatedRows = Math.ceil((scrollHeight - this.baseHeight) / 17);
      const updatedRows = minRows + recalculatedRows;

      const newValue = event.target.value;

      if (updatedRows !== rows) {
        updatedState.rows = rows;
      }

      if (newValue !== value) {
        updatedState.value = newValue;
      }

      this.setState(updatedState);
    }
  }

  @autobind
  onClick() {
    const { value } = this.state;
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(value);
    }

    this.setState({
      value: '',
    });
  }

  /**
   * @type {Number}
   */
  baseHeight = 0;

  render() {
    const { value, rows } = this.state;
    const { className } = this.props;

    const sendInputClassName = classnames(chatSendInputClassNames['chat-send-input'], className);

    return (
      <div className={sendInputClassName}>
        <textarea
          rows={rows}
          value={value}
          className={chatSendInputClassNames['chat-send-input__text-area']}
          placeholder="Type message..."
          type="text"
          onChange={this.onChange}
          ref={(node) => { this.textArea = node; }}
        />
        <Svg
          className={chatSendInputClassNames['chat-send-input__icon']}
          icon={ICONS.QUILL}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default ChatSendInput;
