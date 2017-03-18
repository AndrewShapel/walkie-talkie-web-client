import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component store={store} />
      </Provider>
    </AppContainer>,
        document.getElementById('root'),
    );
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
