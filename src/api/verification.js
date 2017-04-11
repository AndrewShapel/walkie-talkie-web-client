import http from '../http/http';

import api from '../constants/api/api';

export const verificationSignIn = {};

/**
 * @param {String} email
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} password
 * @return {Promise}
 */
export const verificationSignUp = (email, firstName, lastName, password) => {
  const signUp = api.verification.signUp;

  return http({
    method: signUp.method,
    url: signUp.url,
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });
};
