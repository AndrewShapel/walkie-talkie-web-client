export const SET_ACTIVE_ID = 'conversations:SET_ACTIVE_ID';
/**
 * @param {String} activeId
 * @returns {Object}
 */
export const setActiveId = activeId => ({
  type: SET_ACTIVE_ID,
  payload: {
    activeId,
  },
});

export const RESET_ACTIVE_ID = 'conversations:RESET_ACTIVE_ID';
/**
 * @returns {Object}
 */
export const resetActiveId = () => ({
  type: RESET_ACTIVE_ID,
});
