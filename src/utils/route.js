export default class Route {
  /**
   * @param {Boolean} isExact
   * @param {String} pathName
   * @param {String} redirectTo
   * @param {Function} redirect
   */
  static redirectIfExactRoute(isExact, pathName, redirectTo, redirect) {
    if (isExact) {
      const redirectToPathName = `${pathName}${redirectTo}`;
      redirect(redirectToPathName);
    }
  }
}
