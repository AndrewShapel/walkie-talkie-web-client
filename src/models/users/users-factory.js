import { List } from 'immutable';

import { USER_PERMISSION } from '../../constants/user';

import User from './user';
import Account from './account';

export default class UsersFactory {

  /**
   * @param {String} email
   * @returns {Account}
   */
  static createAccount(email) {
    return new Account({
      email,
      permission: USER_PERMISSION.BASIC,
    });
  }

  /**
   * @param {Object} user
   * @returns {Object}
   */
  static createUser(user) {
    const { email, firstName, lastName, password } = user;

    return new User({
      email,
      firstName,
      lastName,
      password,
    });
  }

  /**
   * @param {Array} users
   * @returns {Object}
   */
  static createUsers(users) {
    return List().withMutations((context) => {
      users.forEach((user) => {
        const newUser = UsersFactory.createUser(user);
        context.push(newUser);
      });
    });
  }
}
