import Todos from '../models/todos';
import { ADD_TODO } from '../action-types/todo';

const initialState = new Todos();

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      state.addTodo(action.payload.todoId);
      return Object.create(state);
    default:
      return state;
  }
}
