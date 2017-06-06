import { Record, List } from 'immutable';

const Structure = Record({

  /**
   * @type {Object}
   */
  friends: List(),
});

export default class Friends extends Structure {

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
