import { Todo } from './todo';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: ` <div class="py-2 border-b">
    <div class="flex space-x-2 justify-between items-center">
      <div>{{ todo.title }}</div>
      <button
        type="button"
        (click)="deleteTodo.emit(todo.id)"
        class="border-2 px-2 py-2 rounded-md text-white bg-red-500"
      >
        Delete
      </button>
    </div>
  </div>`,
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<number>();
}
