import { Record, List } from 'immutable';

const Structure = Record({

  /**
   * @type {Object}
   */
  peers: List(),
});

export default class Connection extends Structure {
  /**
   * @returns {Object}
   */
  getPeers() {
    return this.get('peers');
  }

  /**
   * @param {Object} peers
   * @returns {Object}
   */
  setPeers(peers) {
    return this.set('peers', peers);
  }

  /**
   * @param {Object} peer
   * @returns {Object}
   */
  addPeer(peer) {
    const updatedPeers = this.getPeers().push(peer);
    return this.setPeers(updatedPeers);
  }

  /**
   * @param {String} chatId
   * @param {Object} peer
   * @returns {Object}
   */
  updatePeer(chatId, peer) {
    const peers = this.getPeers();

    const peerKey = peers.findKey(currentPeer => currentPeer.getChatId() === chatId);
    if (peerKey >= 0) {
      const updatedPeers = this.getPeers().set(peerKey, peer);
      return this.setPeers(updatedPeers);
    }

    return this;
  }

  /**
   * @param {String} chatId
   * @returns {Object|Null}
   */
  getPeerByChatId(chatId) {
    return this.getPeers().find(peer => peer.getChatId() === chatId);
  }
}
