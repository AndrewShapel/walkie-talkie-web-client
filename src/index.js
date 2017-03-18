import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './Root';

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
        document.getElementById('root'),
    );
}

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    render(Root);
  });
}
