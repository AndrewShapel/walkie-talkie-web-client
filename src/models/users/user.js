import {Record} from 'immutable';

const Structure = Record({

  /**
   * @type {Number}
   */
  id: 0,

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
  status: '',
});

export default class User extends Structure {

  /**
   * @returns {Number}
   */
  getId() {
    return this.get('id');
  }

  /**
   * @param {Number} id
   * @returns {Object}
   */
  setId(id) {
    return this.set('id', id);
  }

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
   * @returns {Object}
   */
  setFirstName(firstName) {
    return this.set('firstName', firstName);
  }

  /**
   * @returns {Object}
   */
  getLastName() {
    return this.get('lastName');
  }

  /**
   * @param {String} lastName
   * @returns {Object}
   */
  setLastName(lastName) {
    return this.set('lastName');
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
}
