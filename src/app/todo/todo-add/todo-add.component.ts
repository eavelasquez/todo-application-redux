import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromTodo from '../todo.actions';
import { AddTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  public text: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.text = new FormControl('', Validators.required);
  }

  public addTodo(): void {
    if (this.text.invalid) { return; }
    const action = new AddTodoAction(this.text.value);
    this.store.dispatch(action);
    this.text.setValue('');
  }


}
