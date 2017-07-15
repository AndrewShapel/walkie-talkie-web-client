export default class Dom {
  /**
   * @param {Object} parent
   * @param {Object} child
   * @returns {Boolean}
   */
  static isDescendant(parent, child) {
    const node = child.parentNode;

    if (node !== null && node === parent) {
      return true;
    } else if (node !== null && node !== parent) {
      return Dom.isDescendant(parent, node);
    }

    return false;
  }
}
