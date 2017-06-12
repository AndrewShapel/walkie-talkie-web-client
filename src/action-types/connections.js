export const OPEN = 'connections:OPEN';
/**
 * @returns {Object}
 */
export const open = () => ({
  type: OPEN,
});

export const CLOSE = 'connections:CLOSE';
/**
 * @returns {Object}
 */
export const close = () => ({
  type: CLOSE,
});
