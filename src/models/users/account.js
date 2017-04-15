import { Record } from 'immutable';

import { USER_PERMISSION } from '../../constants/user';

import User from './user';

const Structure = Object.assign(Record({
  permission: USER_PERMISSION.VIEW_ONLY,
}), User);

export default class Account extends Structure {

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
