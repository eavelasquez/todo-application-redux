import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  public todo: Todo[] = [];
  public filter: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.todo = state.todo as Todo[];
      this.filter = state.filter as validFilters;
    });
  }

}
