import { KEYBOARD_KEYS } from '../constants/keyboard';

export default class Keyboard {
  /**
   * @param {Number} keyCode
   * @return {String}
   */
  static getKeyName(keyCode) {
    switch (keyCode) {
      case 13:
        return KEYBOARD_KEYS.ENTER;
      case 38:
        return KEYBOARD_KEYS.ARROW_UP;
      case 40:
        return KEYBOARD_KEYS.ARROW_DOWN;
      default:
        return '';
    }
  }
}
