import { Record } from 'immutable';

import User from '../../models/users/user';

const Structure  = Record({

  /**
   * @type {String}
   */
  body: '',

  /**
   * @type {String}
   */
  timestamp: '',

  /**
   * @type {Object}
   */
  user: new User(),
});

export default class ChatMessages extends Structure {

  /**
   * @returns {String}
   */
  getBody() {
    return this.get('body');
  }

  /**
   * @param {String} body
   * @returns {Object}
   */
  setBody(body) {
    return this.set('body', body);
  }

  /**
   * @returns {String}
   */
  getTimestamp() {
    return this.get('timestamp');
  }

  /**
   * @param {String} timestamp
   * @returns {Object}
   */
  setTimestamp(timestamp) {
    return this.get('timestamp', timestamp);
  }

  /**
   * @returns {Object}
   */
  getUser() {
    return this.get('user');
  }

  /**
   * @param {Object} user
   * @returns {Object}
   */
  setUser(user) {
    return this.set('user', user);
  }
}
