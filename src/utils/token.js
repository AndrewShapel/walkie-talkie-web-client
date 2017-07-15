export default class Token {

  /**
   * @type {String}
   */
  static tokenName = 'token';

  /**
   * @param {String} token
   */
  static setToken(token) {
    if (token) {
      localStorage.setItem(Token.tokenName, token);
    }
  }

  /**
   * @returns {String|Null}
   */
  static getToken() {
    return localStorage.getItem(Token.tokenName);
  }

  static removeToken() {
    localStorage.removeItem(Token.tokenName);
  }
}
