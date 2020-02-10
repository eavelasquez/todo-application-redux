import { Component, OnInit } from '@angular/core';
import { validFilters, SetFilterAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { DeleteAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [`.pointer { cursor: pointer; }`]
})
export class TodoFooterComponent implements OnInit {

  public pending: number;
  public currentFilter: validFilters;
  public validFilters: validFilters[] = ['all', 'completed', 'pending'];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.counterPending(state.todo);
      this.currentFilter = state.filter;
    });
  }

  changeFilter(filter: validFilters) {
    const action = new SetFilterAction(filter);
    this.store.dispatch(action);
  }

  private counterPending(todo: Todo[]): void {
    this.pending = todo.filter((task) => !task.completed).length;
  }

  public clearCompleted(): void {
    const action = new DeleteAllTodoAction();
    this.store.dispatch(action);
  }

}
