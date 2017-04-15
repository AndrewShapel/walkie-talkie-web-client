import * as interceptors from './interceptors/index';

export default class Interceptors {

  /**
   * @type {String}
   */
  static requestName = 'request';

  /**
   * @type {String}
   */
  static responseName = 'response';

  /**
   * @type {String}
   */
  static onSuccessName = 'onSuccess';

  /**
   * @type {String}
   */
  static onErrorName = 'onError';

  /**
   * @param {Function} interceptor
   * @param {Object} http
   * @param {String} type
   * @returns {Object}
   */
  static invokeInterceptor(interceptor, http, type) {
    if (interceptor) {
      const onSuccessInterceptor = interceptor[Interceptors.onSuccessName];
      const onErrorInterceptor = interceptor[Interceptors.onErrorName];

      return http.interceptors[type].use(onSuccessInterceptor, onErrorInterceptor);
    }

    return http;
  }

  /**
   * @param {Object} http
   * @returns {Object}
   */
  static invokeInterceptors(http) {
    Object.keys(interceptors).forEach((interceptorName) => {
      const interceptor = interceptors[interceptorName];

      const requestName = Interceptors.requestName;
      const responseName = Interceptors.responseName;

      const requestInterceptor = interceptor[requestName];
      const responseInterceptor = interceptor[responseName];

      Interceptors.invokeInterceptor(requestInterceptor, http, requestName);
      Interceptors.invokeInterceptor(responseInterceptor, http, responseName);
    });

    return http;
  }
}
