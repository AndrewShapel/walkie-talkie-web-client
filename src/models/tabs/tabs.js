import { Record } from 'immutable';

import { TABS } from '../../constants/tabs';

const Structure = Record({

  /**
   * @type {String}
   */
  activeTab: TABS.FRIENDS,
});

export default class Tabs extends Structure {

  /**
   * @returns {String}
   */
  getActiveTab() {
    return this.get('activeTab');
  }

  /**
   * @param {String} activeTab
   * @returns {Object}
   */
  setActiveTab(activeTab) {
    return this.set('activeTab', activeTab);
  }
}
