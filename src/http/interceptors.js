import { isFunction } from 'lodash';

import * as interceptors from './interceptors/index';

export default class Interceptors {

  /**
   * @param {Object} properties
   * @param {Object} interceptor
   * @param {String} interceptorKey
   * @returns {Object}
   */
  static invokeInterceptor(properties, interceptor, interceptorKey) {
    if (interceptor) {
      const handler = interceptor[interceptorKey];
      if (isFunction(handler)) {
        return handler(properties);
      }
    }

    return properties;
  }

  /**
   * @param {Object} properties
   * @param {String} interceptorKey
   */
  static invokeInterceptors(properties, interceptorKey) {
    let updatedProperties = Object.assign({}, properties);

    if (interceptors) {
      Object.keys(interceptors).forEach((interceptorName) => {
        const interceptor = interceptors[interceptorName];
        updatedProperties = Interceptors.invokeInterceptor(properties, interceptor, interceptorKey);
      });
    }

    return updatedProperties;
  }

  /**
   * @param {Object} request
   * @return {Object}
   */
  static getRequestInterceptors(request) {
    return Interceptors.invokeInterceptors(request, 'onRequest');
  }

  /**
   * @param {Object} response
   * @return {Function}
   */
  static getResponseInterceptors(response) {
    return Interceptors.invokeInterceptors(response, 'onResponse');
  }
}
