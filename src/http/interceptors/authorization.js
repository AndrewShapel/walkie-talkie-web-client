import { HTTP_STATUSES_CODES } from '../../constants/http';

import Token from '../../utils/token';

export default {

  request: {
    /**
     * @param {Object} request
     * @returns {Object}
     */
    onSuccess: (request) => {
      const updatedRequest = Object.assign({}, request);
      const token = Token.getToken();

      if (token) {
        updatedRequest.headers.Authorization = `JWT ${token}`;
      }

      return updatedRequest;
    },

    /**
     * @param {Object} error
     * @returns {Promise}
     */
    onError: error => Promise.reject(error),
  },

  response: {

    /**
     * @param {Object} request
     * @returns {Object}
     */
    onSuccess: request => request,

    /**
     * @param {Object} error
     * @returns {Promise}
     */
    onError: (error) => {
      const status = error.response.status;

      if (status === HTTP_STATUSES_CODES.UNAUTHORIZED) {
        // Redirect
      }

      return Promise.reject(error);
    },
  },
};
