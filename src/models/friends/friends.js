import { Record, List } from 'immutable';

const Structure = Record({

  /**
   * @type {Object}
   */
  friendRequests: List(),

  /**
   * @type {Object}
   */
  friends: List(),
});

export default class Friends extends Structure {

  /**
   * @returns {Object}
   */
  getFriendRequests() {
    return this.get('friendRequests');
  }

  /**
   * @param {Object} friendRequests
   * @returns {Object}
   */
  setFriendRequests(friendRequests) {
    return this.set('friendRequests', friendRequests);
  }

  /**
   * @returns {Object}
   */
  getFriends() {
    return this.get('friends');
  }

  /**
   * @param {Object} friends
   * @returns {Object}
   */
  setFriends(friends) {
    return this.set('friends', friends);
  }
}
