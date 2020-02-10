import { Action } from '@ngrx/store';

export const TODO_ADD = '[TODO] Add Todo';
export const TODO_EDIT = '[TODO] Edit Todo';
export const TODO_TOGGLE = '[TODO] Toggle Todo';
export const TODO_DELETE = '[TODO] Delete Todo';
export const TODO_ALL_TOGGLE = '[TODO] Toggle All Todo';
export const TODO_ALL_DELETE = '[TODO] All Delete Todo';

export class AddTodoAction implements Action {
  public readonly type: string = TODO_ADD;

  constructor(public text: string, public id?: number, public completed?: boolean) {}
}

export class EditTodoAction implements Action {
  public readonly type: string = TODO_EDIT;

  constructor(public id: number, public text: string, public completed?: boolean) {}
}

export class ToggleTodoAction implements Action {
  public readonly type: string = TODO_TOGGLE;

  constructor(public id: number, public text?: string, public completed?: boolean) {}
}

export class DeleteTodoAction implements Action {
  public readonly type: string = TODO_DELETE;

  constructor(public id: number, public text?: string, public completed?: boolean) {}
}

export class ToggleAllTodoAction implements Action {
  public readonly type: string = TODO_ALL_TOGGLE;

  constructor(public completed: boolean, public id?: number, public text?: string) {}
}

export class DeleteAllTodoAction implements Action {
  public readonly type: string = TODO_ALL_DELETE;

  constructor(public completed?: boolean, public id?: number, public text?: string) {}
}

export type Actions = AddTodoAction | EditTodoAction| ToggleTodoAction | DeleteTodoAction | ToggleAllTodoAction | DeleteAllTodoAction;
