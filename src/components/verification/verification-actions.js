import { MESSAGE_TARGETS } from '../../constants/messages';

export default class VerificationActions {

  /**
   * @param {Object} messages
   * @param {Function} setMessagesAction
   */
  static clearMessages(messages, setMessagesAction) {
    const messagesIds = messages.getByTarget(MESSAGE_TARGETS.USERS).map(message => message.getId());
    const removedMessages = messages.deleteByIds(messagesIds);

    setMessagesAction(removedMessages);
  }
}
