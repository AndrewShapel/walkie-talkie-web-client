import createHistory from 'history/createBrowserHistory';

import Store from './store/store';
import Application from './application';

import Root from './containers/root';

const history = createHistory();
const store = new Store(history).getStore();
const application = new Application(store, history, Root, document.querySelector('.root'));

application.render();

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    application.render();
  });
}
