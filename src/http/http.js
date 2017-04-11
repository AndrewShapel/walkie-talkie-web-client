import axios from 'axios';

export default axios.create({
  /* eslint-disable no-underscore-dangle, no-undef */
  baseURL: __ENDPOINT__,
  /* eslint-enable no-underscore-dangle, no-undef */
});
