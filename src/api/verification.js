import http from '../http/http';

import api from '../constants/api/api';

/**
 * @param {String} email
 * @param {String} password
 * @returns {Promise}
 */
export const verificationSignIn = (email, password) => {
  const signIn = api.verification.signIn;

  return http({
    method: signIn.method,
    url: signIn.url,
    data: {
      email,
      password,
    },
  });
};

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

/**
 * @returns {Promise}
 */
export const verificationSignOut = () => {
  const signOut = api.verification.signOut;

  return http({
    method: signOut.method,
    url: signOut.url,
  });
};
