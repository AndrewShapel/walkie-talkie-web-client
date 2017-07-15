/**
 * @const
 * @type {Object}
 */
export default {
  home: {
    url: '/',
  },
  conversation: {
    url: {
      base: '/conversation',
      specific: '/:id?',
    },
  },
  about: {
    url: '/about',
  },
  call: {
    url: '/call',
  },
  userVerification: {
    url: {
      base: '/verification',
      signin: '/signin',
      signup: '/signup',
    },
  },
};
