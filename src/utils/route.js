export default class Route {

  /**
   * @param {Boolean} isExact
   * @param {String} pathName
   * @param {String} redirectTo
   * @param {Function} redirect
   */
  static redirectIfExactRoute(isExact, pathName, redirectTo, redirect) {
    if (isExact) {
      const pathNameWithputSlash = pathName.replace(/\/$/, '');
      const redirectToPathName = `${pathNameWithputSlash}${redirectTo}`;
      redirect(redirectToPathName);
    }
  }

  /**
   * @param {Function} redirect
   */
  static redirectToSignIn(redirect) {
    console.log(redirect);
  }
}
