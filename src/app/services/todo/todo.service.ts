import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor() {
    this.loadTodosFromLocalStorage();
  }

  private todos: string[] = [];

  private loadTodosFromLocalStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTodos = window.localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    }
  }

  private saveTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(item: string): void {
    const sentenceCaseItem = this.toSentenceCase(item);
    this.todos.push(sentenceCaseItem);
    this.saveTodosToLocalStorage();
  }
  
  toSentenceCase(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  getTodos(): string[] {
    return this.todos;
  }

  deleteTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
      this.saveTodosToLocalStorage();
    }
  }
  
  clearTodos(): void {
    this.todos = [];
    this.saveTodosToLocalStorage();
  }
}
