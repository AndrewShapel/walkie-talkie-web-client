import { Record } from 'immutable';

const Structure = Record({

  /**
   * @type {String}
   */
  chatId: '',

  /**
   * @type {Object|Null}
   */
  connection: null,

  /**
   * @type {Object|Null}
   */
  dataChannel: null,
});

export default class Connection extends Structure {

  /**
   * @returns {String}
   */
  getChatId() {
    return this.get('chatId');
  }

  /**
   * @param {String} chatId
   * @returns {Object}
   */
  setChatId(chatId) {
    return this.set('chatId', chatId);
  }

  /**
   * @returns {Object}
   */
  getConnection() {
    return this.get('connection');
  }

  /**
   * @param {Object} connection
   * @returns {Object}
   */
  setConnection(connection) {
    return this.set('connection', connection);
  }

  /**
   * @returns {Object}
   */
  getDataChannel() {
    return this.get('dataChannel');
  }

  /**
   * @param {Object} dataChannel
   * @returns {Object}
   */
  setDataChannel(dataChannel) {
    return this.set('dataChannel', dataChannel);
  }
}
