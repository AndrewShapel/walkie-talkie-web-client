export const ADD_TODO = 'todo:ADD';
/**
 * @param {Number} todoId
 */
export const addTodo = todoId => ({
  type: ADD_TODO,
  payload: {
    todoId,
  },
});
