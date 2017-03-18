import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout';

const Root = ({ store }) => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

Root.defaultProps = {
  store: {},
};

Root.propTypes = {
  store: React.PropTypes.object,
};

export default Root;
