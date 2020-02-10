import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';

export interface AppState {
  todo: Todo[];
  filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todo: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
