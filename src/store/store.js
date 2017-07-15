import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from '../reducers';
import sagas from '../sagas';

class Store {

  /**
   * @param {Object} history
   * @param {Object} initialState
   */
  constructor(history, initialState = {}) {
    const globalReducer = combineReducers({
      ...reducers,
      router: routerReducer,
    });

    const sagaMiddleware = createSagaMiddleware();
    const reactRouterReduxMiddleware = routerMiddleware(history);
    const middleware = [sagaMiddleware, reactRouterReduxMiddleware];

    /* eslint-disable no-underscore-dangle, no-undef */
    const reduxDevToolsExtensions = window ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : window;
    const composeEnhancers = __DEV__ && reduxDevToolsExtensions ? reduxDevToolsExtensions : compose;
    /* eslint-enable no-underscore-dangle, no-undef */

    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(globalReducer, initialState, enhancer);

    /**
     *
     * @type {Object}
     */
    this.store = store;

    sagaMiddleware.run(sagas);
    this.runHotModuleReplacement(store);
  }

  /**
   * @returns {Object|Null}
   */
  getStore() {
    return this.store;
  }

  /**
   * @returns {Object|Null}
   */
  getState() {
    if (this.store) {
      return this.store.getState();
    }

    return null;
  }

  /**
   * @param {String} action
   */
  dispatch(action) {
    if (this.store) {
      this.store.dispatch(action);
    }
  }

  /**
   * @param {Function} listener
   * @returns {Function|Null}
   */
  subscribe(listener) {
    if (this.store) {
      return this.store.subscribe(listener);
    }

    return null;
  }

  runHotModuleReplacement() {
    const store = this.store;
    if (module.hot && store) {
      module.hot.accept('../reducers', () => {
        /* eslint-disable global-require */
        const nextRootReducer = require('../reducers').default;
        /* eslint-enable global-require */
        store.replaceReducer(nextRootReducer);
      });
    }
  }
}

export default Store;
