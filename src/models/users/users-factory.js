import { List } from 'immutable';

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
