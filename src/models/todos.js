class Todos {
  constructor() {
    /**
     * @type {Array}
     */
    this.todos = [];
  }

  /**
   * @param {Number} todoId
   */
  addTodo(todoId) {
    this.todos.push(todoId);
  }
}

export default Todos;
