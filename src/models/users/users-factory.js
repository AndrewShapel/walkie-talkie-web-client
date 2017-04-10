import User from './user';

export default class UsersFactory {

  /**
   * @param {Object} user
   * @returns {Object}
   */
  static userFromResponse(user) {
    const {id, email, firstName, lastName, password} = user;

    return new User({
      id,
      email,
      firstName,
      lastName,
      password,
    });
  }

  /**
   * @param {Object} response
   * @returns {Object}
   */
  static usersFromResponse(response) {
    return response.map((user) => UsersFactory.userFromResponse(user));
  }
}
