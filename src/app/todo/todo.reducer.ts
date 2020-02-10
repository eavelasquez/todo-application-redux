import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const initialState: Todo[] = [
  new Todo('Learn PHP'),
  new Todo('Learn English'),
  new Todo('Learn Blockchain')
];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
  switch (action.type) {
    case fromTodo.TODO_ADD:
      const todo: Todo = new Todo(action.text);
      state = [...state, todo];
      break;

    case fromTodo.TODO_EDIT:
      state = state.map((task) => {
        return task.id === action.id ? { ...task, text: action.text } : task;
      });
      break;

    case fromTodo.TODO_TOGGLE:
      state = state.map((task) => {
        return task.id === action.id ? { ...task, completed: !task.completed } : task;
      });
      break;

    case fromTodo.TODO_DELETE:
      state = state.filter((task) => task.id !== action.id);
      break;

    case fromTodo.TODO_ALL_TOGGLE:
      state = state.map((task) => ({...task, completed: action.completed}));
      break;

    case fromTodo.TODO_ALL_DELETE:
      state = state.filter((task) => !task.completed);
      break;

    default:
      state = state;
      break;
  }
  return state;
}
