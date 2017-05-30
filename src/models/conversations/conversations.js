import { Record } from 'immutable';

const Structure = Record({
  activeId: '',
});

export default class Conversation extends Structure {

  /**
   * @return {String}
   */
  getActiveId() {
    return this.get('activeId');
  }

  /**
   * @param {String} activeId
   * @return {Object}
   */
  setActiveId(activeId) {
    return this.set('activeId', activeId);
  }

  /**
   * @return {Object}
   */
  resetActiveId() {
    return this.setActiveId('');
  }
}
