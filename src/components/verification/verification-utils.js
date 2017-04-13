import { MESSAGE_TARGETS } from '../../constants/messages';

export default class VerificationUtils {

  /**
   * @param {Object} messages
   * @returns {Array}
   */
  static convertMessages(messages) {
    return messages.getByTarget(MESSAGE_TARGETS.USERS)
      .valueSeq()
      .toArray()
      .map(message => message.getText());
  }

  /**
   * @param {Object} form
   */
  static resetForm(form) {
    if (form) {
      form.reset();
    }
  }
}
