import { Component } from '@angular/core';
import { SingletonComponent } from './singleton/singleton.component';
import { MultipleComponent } from './multiple/multiple.component';
import { TodoService } from '../../../services/todo/todo.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [SingletonComponent,MultipleComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  constructor(private todoService:TodoService){}
  todos: string[] = [];
  newTodo:string = '';

  ngAfterViewInit():void{
    this.getTodos();
  }

  newTodoItem(val:string){
    this.newTodo = val;
  }

  getTodos():void{
    this.todos = this.todoService.getTodos();
  }

  addTodoItem(item:string):void{
    if(item != ''){
      this.todoService.addTodo(item);
      this.getTodos();
    }
  }

  deleteTodo(index:number):void{
    this.todoService.deleteTodo(index);
    this.getTodos();
  }

  clearItems(): void {
    this.todoService.clearTodos();
    this.getTodos();
  }
}
