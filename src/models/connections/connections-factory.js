import Connection from './connection';

export default class ConnectionsFactory {

  /**
   * @param {String} chatId
   * @param {Object} connection
   * @returns {Object}
   */
  static createPeerConnection(chatId, connection) {
    return new Connection({
      chatId,
      connection,
    });
  }
}
