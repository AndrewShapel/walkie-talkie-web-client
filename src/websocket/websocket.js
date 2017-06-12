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
}

export default new WS();
