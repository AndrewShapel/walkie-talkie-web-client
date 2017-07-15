export const SET_ACTIVE = 'tabs:SET_ACTIVE';
/**
 * @param {String} activeTab
 * @returns {Object}
 */
export const setActive = activeTab => ({
  type: SET_ACTIVE,
  payload: {
    activeTab,
  },
});
