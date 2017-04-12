import { Record, OrderedMap } from 'immutable';

const Structure = Record({

  /**
   * @type {Object}
   */
  messages: OrderedMap(),
});

export default class Messages extends Structure {

  /**
   * @return {Object}
   */
  getMessages() {
    return this.get('messages');
  }

  /**
   * @param {Object} messages
   * @return {Object}
   */
  setMessages(messages) {
    return this.set('messages', messages);
  }

  /**
   * @param {Object} message
   * @return {Object}
   */
  pushMessage(message) {
    const id = message.getId();
    const updatedMessages = this.getMessages().set(id, message);

    return this.setMessages(updatedMessages);
  }

  /**
   * @param {String} target
   * @return {Object}
   */
  getByTarget(target) {
    return this.getMessages().filter(message => message.getTarget() === target);
  }

  /**
   * @param {String} type
   * @return {Object}
   */
  getByType(type) {
    return this.getMessages().filter(message => message.getType() === type);
  }
}
