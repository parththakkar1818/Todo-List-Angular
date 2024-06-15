import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  localItem: string | null = null;
  todos: Todo[];

  constructor() {
    this.localItem = this.getLocalStorageItem('todos');
    if (this.localItem === null || this.localItem.trim() === '') {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  setLocalStorageItem(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  getLocalStorageItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.setLocalStorageItem('todos', JSON.stringify(this.todos));
    console.log('updated ls');
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    this.setLocalStorageItem('todos', JSON.stringify(this.todos));
    console.log('updated ls');
  }
  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    this.setLocalStorageItem('todos', JSON.stringify(this.todos));

  }
  
}
