import { Record, List } from 'immutable';

import Account from './account';

const Structure = Record({

  /**
   * @type {Object}
   */
  account: new Account(),

  /**
   * @type {Object}
   */
  friends: List(),

  /**
   * @type {Object}
   */
  users: List(),
});

export default class Users extends Structure {

  /**
   * @returns {Object}
   */
  getAccount() {
    return this.get('account');
  }

  /**
   * @param {Object} account
   * @returns {Object}
   */
  setAccount(account) {
    return this.set('account', account);
  }

  /**
   * @returns {Object}
   */
  getUsers() {
    return this.get('users');
  }

  /**
   * @param {Object} users
   * @returns {Object}
   */
  setUsers(users) {
    return this.set('users', users);
  }

  /**
   * @param {Number} id
   * @returns {Object}
   */
  getUserById(id) {
    return this.getUsers().find(user => user.getId() === id);
  }
}
