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
  addMessage(message) {
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

  /**
   * @param {Object|Array} ids
   * @return {Object}
   */
  deleteByIds(ids) {
    return this.getMessages().withMutations(context => (
      ids.forEach((id) => {
        if (context.has(id)) {
          context.delete(id);
        }
      })
    ));
  }
}
