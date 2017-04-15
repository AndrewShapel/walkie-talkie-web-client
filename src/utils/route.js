import routes from '../constants/routes/routes';

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

  static redirectToSignIn() {
    const url = routes.userVerification.url;

    const { base, signin } = url;
    return `${base}${signin}`;
  }
}
