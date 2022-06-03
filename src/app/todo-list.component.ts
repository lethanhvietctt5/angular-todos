import { Todo } from './todo';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <app-todo-item
      *ngFor="let todo of todos"
      [todo]="todo"
      (deleteTodo)="delete($event)"
    ></app-todo-item>
  `,
})
export class TodoListComponent {
  @Input() todos!: Todo[];
  @Input() query!: string;
  @Output() deleteTodo = new EventEmitter<number>();

  delete(id: number) {
    this.deleteTodo.emit(id);
  }
}
