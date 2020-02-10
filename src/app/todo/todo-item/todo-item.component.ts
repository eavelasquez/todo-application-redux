import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [`.destroy { cursor: pointer; }`]
})
export class TodoItemComponent implements OnInit {

  @Input() public task: Todo;
  @ViewChild('textInput', { static: true }) private textInput: ElementRef;

  public edit: boolean;
  public text: FormControl;
  public check: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.text = new FormControl(this.task.text, Validators.required);
    this.check = new FormControl(this.task.completed);
    this.check.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.task.id);
      this.store.dispatch(action);
    });
  }

  public focus(): void {
    this.edit = true;
    setTimeout(() => {
      this.textInput.nativeElement.select();
    }, 1);
  }

  public blur(): void {
    this.textInput.nativeElement.blur();
  }

  public editing(): void {
    this.edit = false;
    if (this.text.invalid || this.text.value === this.task.text) { return; }
    const action = new EditTodoAction(this.task.id, this.text.value);
    this.store.dispatch(action);
  }

  public deleting(): void {
    const action = new DeleteTodoAction(this.task.id);
    this.store.dispatch(action);
  }

}
