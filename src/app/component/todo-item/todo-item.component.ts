import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set dynamic classes
  setClasses() {
      let classes = {
          todo: true,
          'is-complete': this.todo.completed
      }

      return classes;
  }

  onDelete(todo): void {
      // Emit delete to parent component
      this.deleteTodo.emit(todo);
  }

  onToggle(todo): void {
      // Toggle in UI
      todo.completed = !todo.completed;
      // Toggle on server
      this.todoService
        .toggleCompleted(todo)
        .subscribe(todo => console.log(todo));
  }
}
