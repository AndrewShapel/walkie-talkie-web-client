import { CONNECTIONS_WEB_SOCKET_STATES_CODES } from '../constants/connections';

class WS {

  /**
   * @type {Object|Null}
   */
  instance = null;

  /**
   * @returns {Object|Null}
   */
  getInstance() {
    return this.instance;
  }

  open() {
    /* eslint-disable no-underscore-dangle, no-undef */
    const location = `${window.location.host}${__SIGNAL__}`;
    /* eslint-enable no-underscore-dangle, no-undef */

    this.instance = new WebSocket(`ws://${location}`);
  }

  close() {
    if (this.instance) {
      this.instance.close();

      this.instance = null;
    }
  }

  /**
   * @type {Object} data
   */
  send(data) {
    if (this.isReady()) {
      this.getInstance().send(data);
    }
  }

  /**
   * @returns {Boolean}
   */
  isReady() {
    const instance = this.getInstance();
    return instance && instance.readyState === CONNECTIONS_WEB_SOCKET_STATES_CODES.OPEN;
  }
}

export default new WS();
