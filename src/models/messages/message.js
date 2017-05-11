import { Record } from 'immutable';

const Structure = Record({

  /**
   * @type {String}
   */
  id: '',

  /**
   * @type {String}
   */
  target: '',

  /**
   * @type {String}
   */
  text: '',

  /**
   * @type {String}
   */
  type: '',
});

export default class Message extends Structure {

  /**
   * @return {String}
   */
  getId() {
    return this.get('id');
  }

  /**
   * @param {String} id
   * @return {Object}
   */
  setId(id) {
    return this.set('id', id);
  }

  /**
   * @return {String}
   */
  getTarget() {
    return this.get('target');
  }

  /**
   * @param {String} target
   * @return {Object}
   */
  setTarget(target) {
    return this.set('target', target);
  }

  /**
   * @return {String}
   */
  getText() {
    return this.get('text');
  }

  /**
   * @param {String} text
   * @return {Object}
   */
  setText(text) {
    return this.set('text', text);
  }

  /**
   * @return {String}
   */
  getType() {
    return this.get('type');
  }

  /**
   * @param {String} type
   * @return {Object}
   */
  setType(type) {
    return this.set('type', type);
  }
}
