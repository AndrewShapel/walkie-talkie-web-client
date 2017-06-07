import { Record } from 'immutable';

import { USER_PERMISSION } from '../../constants/user';

import User from './user';

const Structure = Object.assign(Record({
  email: '',
  permission: USER_PERMISSION.VIEW_ONLY,
}), User);

export default class Account extends Structure {

  /**
   * @returns {String}
   */
  getEmail() {
    return this.get('email');
  }

  /**
   * @param {String} email
   * @returns {Object}
   */
  setEmail(email) {
    return this.set('email', email);
  }

  /**
   * @returns {String}
   */
  getPermission() {
    return this.get('permission');
  }

  /**
   * @param {String} permission
   * @returns {Object}
   */
  setPermission(permission) {
    return this.set('permission', permission);
  }
}
