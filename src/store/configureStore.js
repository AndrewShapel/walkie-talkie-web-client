import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';

export default (initialState) => {
  const saga = createSagaMiddleware();
  const middleware = [saga];

  /* eslint-disable no-underscore-dangle, no-undef */
  const reduxDevToolsExtensions = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = __DEV__ && reduxDevToolsExtensions ? reduxDevToolsExtensions : compose;
  /* eslint-enable no-underscore-dangle, no-undef */

  const enhancer = composeEnhancers(
      applyMiddleware(...middleware),
  );

  const store = createStore(
        rootReducer,
        initialState,
        enhancer,
    );

  // saga.run();

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers').default;
      /* eslint-enable global-require */
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
