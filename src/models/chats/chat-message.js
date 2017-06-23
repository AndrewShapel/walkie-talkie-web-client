import { Record } from 'immutable';

const Structure = Record({

  /**
   * @type {String}
   */
  body: '',

  /**
   * @type {String}
   */
  timestamp: '',

  /**
   * @type {String}
   */
  senderEmail: '',
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
   * @returns {String}
   */
  getSenderEmail() {
    return this.get('senderEmail');
  }

  /**
   * @param {String} senderEmail
   * @returns {Object}
   */
  setSenderEmail(senderEmail) {
    return this.set('senderEmail', senderEmail);
  }
}
