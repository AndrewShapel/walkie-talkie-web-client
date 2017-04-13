import axios from 'axios';

import Interceptors from './interceptors';

const instance = axios.create({
  /* eslint-disable no-underscore-dangle, no-undef */
  baseURL: __ENDPOINT__,
  /* eslint-enable no-underscore-dangle, no-undef */
});

instance.interceptors.request.use(Interceptors.onSuccessRequestInterceptor, Interceptors.onErrorRequestInterceptor);
instance.interceptors.response.use(Interceptors.onSuccessResponseInterceptor, Interceptors.onErrorResponseInterceptor);

export default instance;
