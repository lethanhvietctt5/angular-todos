import { Todo } from './todo';
import { Component, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-todo',
  template: `<div class="flex justify-center mt-10">
    <input
      #search
      type="text"
      class="border-2 px-3 py-2 rounded-md  focus:outline-none"
      placeholder="Search Todo"
      (input)="searchTodo.emit(search.value)"
    />
  </div>`,
})
export class SearchTodoComponent {
  @Output() searchTodo = new EventEmitter<string>();
}
