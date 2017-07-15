import { Record, List } from 'immutable';

import User from '../../models/users/user';

const Structure = Record({

  /**
   * @type {String}
   */
  id: '',

  /**
   * @type {String}
   */
  type: '',

  /**
   * @type {String}
   */
  title: '',

  /**
   * @type {Object}
   */
  messages: List(),

  /**
   * @type {Object}
   */
  owner: new User(),

  /**
   * @type {Object}
   */
  members: List(),
});

export default class Chat extends Structure {

  /**
   * @returns {String}
   */
  getId() {
    return this.get('id');
  }

  /**
   * @param {String} id
   * @returns {Object}
   */
  setId(id) {
    return this.set('id', id);
  }

  /**
   * @returns {String}
   */
  getType() {
    return this.get('type');
  }

  /**
   * @param {String} type
   * @returns {Object}
   */
  setType(type) {
    return this.set('type', type);
  }

  /**
   * @returns {String}
   */
  getTitle() {
    return this.get('title');
  }

  /**
   * @param {String} title
   * @returns {Object}
   */
  setTitle(title) {
    return this.set('title', title);
  }

  /**
   * @returns {Object}
   */
  getMessages() {
    return this.get('messages');
  }

  /**
   * @param {Object} messages
   * @returns {Object}
   */
  setMessages(messages) {
    return this.set('messages', messages);
  }

  /**
   * @param {Object} message
   * @returns {Object}
   */
  addMessage(message) {
    const updatedMessages = this.getMessages().push(message);
    return this.setMessages(updatedMessages);
  }

  /**
   * @returns {Object}
   */
  getOwner() {
    return this.get('owner');
  }

  /**
   * @param {Object} owner
   * @returns {Object}
   */
  setOwner(owner) {
    return this.set('owner', owner);
  }

  /**
   * @returns {Object}
   */
  getMembers() {
    return this.get('members');
  }

  /**
   * @param {Object} members
   * @returns {Object}
   */
  setMembers(members) {
    return this.set('members', members);
  }
}
