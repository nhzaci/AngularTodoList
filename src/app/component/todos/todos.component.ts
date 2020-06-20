import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]; // Declare array of Todo objects

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
      this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo: Todo): void {
      // Remove from UI
      this.todos = this.todos.filter(item => item.id !== todo.id);
      // Remove from Server
      this.todoService.deleteTodo(todo).subscribe(todo => console.log(`deleted ${todo}`));
  }

  addTodo(todo: Todo): void {
      // Need to get full object with ID from server
      this.todoService.addTodo(todo).subscribe(todo => {
          this.todos.push(todo);
          console.log(todo);
      });
  }
}
