import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { validFilters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        todo = todo.filter((task) => task.completed);
        break;
      case 'pending':
        todo = todo.filter((task) => !task.completed);
        break;
      default:
        todo = todo;
        break;
    }
    return todo;
  }

}
