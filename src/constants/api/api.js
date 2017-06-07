/**
 * @const
 * @type {Object}
 */
export default {
  verification: {
    signUp: {
      url: '/signup',
      method: 'POST',
    },
    signIn: {
      url: '/signin',
      method: 'POST',
    },
    signOut: {
      url: '/signout',
      method: 'POST',
    },
  },
  graphql: {
    url: '/graphql',
    method: 'POST',
  },
};
