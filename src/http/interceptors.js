import { isFunction } from 'lodash';

import * as interceptors from './interceptors/index';

export default class Interceptors {

  /**
   * @type {String}
   */
  static onSuccessName = 'onSuccess';

  /**
   * @type {String}
   */
  static onErrorName = 'onError';

  /**
   * @param {Object} properties
   * @param {Object} interceptor
   * @param {String} interceptorKey
   * @param {Boolean} isRequest
   * @returns {Object}
   */
  static invokeInterceptor(properties, interceptor, interceptorKey, isRequest) {
    if (interceptor) {
      const interceptorType = (isRequest) ? 'request' : 'response';
      const interceptorHandlers = interceptor[interceptorType];
      if (interceptorHandlers) {
        const handler = interceptorHandlers[interceptorKey];
        if (isFunction(handler)) {
          return handler(properties);
        }
      }
    }

    return properties;
  }

  /**
   * @param {Object} properties
   * @param {String} interceptorKey
   * @param {Boolean} isRequest
   */
  static invokeInterceptors(properties, interceptorKey, isRequest = true) {
    let updatedProperties = Object.assign({}, properties);

    if (interceptors) {
      Object.keys(interceptors).forEach((interceptorName) => {
        const interceptor = interceptors[interceptorName];
        updatedProperties = Interceptors.invokeInterceptor(properties, interceptor, interceptorKey, isRequest);
      });
    }

    return updatedProperties;
  }

  /**
   * @param {Object} request
   * @return {Object}
   */
  static onSuccessRequestInterceptor(request) {
    return Interceptors.invokeInterceptors(request, Interceptors.onSuccessName);
  }

  /**
   * @param {Object} error
   * @return {Promise}
   */
  static onErrorRequestInterceptor(error) {
    return Interceptors.invokeInterceptors(error, Interceptors.onErrorName);
  }

  /**
   * @param response
   * @returns {Object}
   */
  static onSuccessResponseInterceptor(response) {
    return Interceptors.invokeInterceptors(response, Interceptors.onSuccessName, false);
  }

  /**
   * @param {Object} error
   * @returns {Promise}
   */
  static onErrorResponseInterceptor(error) {
    return Interceptors.invokeInterceptors(error, Interceptors.onErrorName, false);
  }
}
