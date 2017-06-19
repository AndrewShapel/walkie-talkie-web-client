import { Record } from 'immutable';

import { USER_STATUS, USER_PERMISSION } from '../../constants/user';

import User from './user';

const Structure = Object.assign(Record({

  /**
   * @type {String}
   */
  email: '',

  /**
   * @type {String}
   */
  firstName: '',

  /**
   * @type {String}
   */
  lastName: '',

  /**
   * @type {String}
   */
  password: '',

  /**
   * @type {String}
   */
  status: USER_STATUS.OFFLINE,

  /**
   * @type {String}
   */
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
  getFirstName() {
    return this.get('firstName');
  }

  /**
   * @param {String} firstName
   * @returns {String}
   */
  setFirstName(firstName) {
    return this.set('firstName', firstName);
  }

  /**
   * @returns {String}
   */
  getLastName() {
    return this.get('lastName');
  }

  /**
   * @param {String} lastName
   * @returns {Object}
   */
  setLastName(lastName) {
    return this.set('lastName', lastName);
  }

  /**
   * @returns {String}
   */
  getFullName() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }

  /**
   * @returns {String}
   */
  getPassword() {
    return this.get('password');
  }

  /**
   * @param {String} password
   * @returns {Object}
   */
  setPassword(password) {
    return this.set('password', password);
  }

  /**
   * @returns {String}
   */
  getStatus() {
    return this.get('status');
  }

  /**
   * @param {String} status
   * @returns {Object}
   */
  setStatus(status) {
    return this.set('status', status);
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
