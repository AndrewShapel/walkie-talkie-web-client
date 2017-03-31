import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

class Application {
  constructor(store, Component, mountTo) {
    /**
     * @type {Object}
     */
    this.store = store;
    /**
     * @type {Object}
     */
    this.component = Component;
    /**
     * @type {Element}
     */
    this.mountTo = mountTo;
  }

  /**
   * @returns {Object}
   */
  getProvider() {
    const Component = this.component;
    const store = this.store;

    return (
      <AppContainer>
        <Provider store={store}>
          <Component store={store} />
        </Provider>
      </AppContainer>
    );
  }

  render() {
    const provider = this.getProvider();
    ReactDOM.render(provider, this.mountTo);
  }
}

export default Application;
