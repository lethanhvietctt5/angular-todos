import { Todo } from './todo';
import {
  Component,
  ElementRef,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="w-full">
    <div class="w-1/3 mx-auto">
      <p class="text-6xl text-center mt-6">Todo app</p>
      <app-search-todo (searchTodo)="search($event)"></app-search-todo>
      <app-todo-list
        class="divide-y divide-slate-200"
        [todos]="result"
        (deleteTodo)="delete($event)"
      ></app-todo-list>
      <app-create-todo (createTodo)="create($event)"></app-create-todo>
    </div>
  </div>`,
})
export class AppComponent {
  title = 'angular-todos';

  todos: Todo[] = [
    { id: 1, title: 'Learn Angular' },
    { id: 2, title: 'Learn TypeScript' },
    { id: 3, title: 'Learn JavaScript' },
  ];
  query = '';
  result = this.todos.filter((todo) =>
    todo.title.toLowerCase().includes(this.query.toLowerCase())
  );

  delete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.result = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  create(title: string) {
    const id = this.todos.length + 1;
    this.todos = [...this.todos, { id, title }];
    this.result = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  search(title: string) {
    this.query = title;
    this.result = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
  