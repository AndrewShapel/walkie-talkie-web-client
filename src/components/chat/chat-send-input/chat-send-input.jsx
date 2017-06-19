import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import Keyboard from '../../../utils/keyboard';

import { ICONS } from '../../../constants/icons';
import { INPUT_TYPES } from '../../../constants/form';
import { KEYBOARD_KEYS } from '../../../constants/keyboard';

import Svg from '../../svg/svg';

import chatSendInputClassNames from './chat-send-input.css';

class ChatSendInput extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    onSelect: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    onSelect: null,
  };

  state = {
    value: '',
  };

  /**
   * @param {Object} event
   */
  @autobind
  onChange(event) {
    const { value } = this.state;

    const newValue = event.target.value;
    if (newValue !== value) {
      this.setState({
        value: newValue,
      });
    }
  }

  /**
   * @param {Object} event
   */
  @autobind
  onKeyUp(event) {
    const pressedKeyName = Keyboard.getKeyName(event.keyCode);
    if (pressedKeyName === KEYBOARD_KEYS.ENTER) {
      this.onSelect();
    }
  }

  @autobind
  onSelect() {
    const { value } = this.state;
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(value);
    }

    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    const { className } = this.props;

    const sendInputClassName = classnames(chatSendInputClassNames['chat-send-input'], className);

    return (
      <div className={sendInputClassName}>
        <input
          className={chatSendInputClassNames['chat-send-input__text-area']}
          value={value}
          placeholder="Type message..."
          type={INPUT_TYPES.text}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
        <Svg
          className={chatSendInputClassNames['chat-send-input__icon']}
          icon={ICONS.QUILL}
          onClick={this.onSelect}
        />
      </div>
    );
  }
}

export default ChatSendInput;
