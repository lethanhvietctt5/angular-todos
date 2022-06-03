import { Todo } from './todo';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <app-todo-item
      *ngFor="let todo of result"
      [todo]="todo"
      (deleteTodo)="delete($event)"
    ></app-todo-item>
  `,
})
export class TodoListComponent implements OnInit {
  @Input() todos!: Todo[];
  @Input() query!: string;
  @Output() deleteTodo = new EventEmitter<number>();

  result: Todo[] = [];

  ngOnInit(): void {
    this.result = this.todos.filter((todo) => todo.title.includes(this.query));
  }

  delete(id: number) {
    this.deleteTodo.emit(id);
  }
}
