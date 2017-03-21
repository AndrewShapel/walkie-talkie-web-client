import Store from './store/store';
import Application from './application';
import Root from './containers/root';

const store = new Store().getStore();
const application = new Application(store, Root, document.querySelector('.root'));

application.render();

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    application.render();
  });
}
