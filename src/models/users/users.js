import {Record, OrderedMap} from 'immutable';

import Account from './account';

const Structure = Record({

  /**
   * @type {Object}
   */
  account: new Account(),

  /**
   * @type {Object}
   */
  users: OrderedMap(),
});

export default class Users extends Structure {

  /**
   * @returns {Object}
   */
  getAccount() {
    return this.get('account')
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
  getById(id) {
    return this.getUsers().find((user) => {
      return user.getId() === id;
    });
  }
}
