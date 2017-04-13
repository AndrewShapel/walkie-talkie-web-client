import axios from 'axios';

import Interceptors from './interceptors';

const instance = axios.create({
  /* eslint-disable no-underscore-dangle, no-undef */
  baseURL: __ENDPOINT__,
  /* eslint-enable no-underscore-dangle, no-undef */
});

instance.interceptors.request.use(Interceptors.getRequestInterceptors, Interceptors.getResponseInterceptors);

export default instance;
