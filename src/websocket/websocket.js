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
    this.instance = new WebSocket(`ws://${__ENDPOINT__}`);
    /* eslint-enable no-underscore-dangle, no-undef */
  }

  close() {
    if (this.instance) {
      this.instance.close();

      this.instance = null;
    }
  }
}

export default new WS();
