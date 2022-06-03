import { Todo } from './todo';
import { Component, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  template: `<div class="flex justify-center mt-10 space-x-4">
    <input
      type="text"
      [(ngModel)]="title"
      class="border-2 px-3 py-2 rounded-md  focus:outline-none"
      placeholder="Enter title todo"
    />
    <button
      type="button"
      (click)="createTodo.emit(title)"
      class="border-2 px-2 py-2 rounded-md text-white bg-green-600"
    >
      Create
    </button>
  </div>`,
})
export class CreateTodoComponent {
  title: string = '';
  @Output() createTodo = new EventEmitter<string>();
}
