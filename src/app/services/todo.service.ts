import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/Todo';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get Todos
  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
      const url: string = `${this.todosUrl}/${todo.id}`;
      return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<Todo> {
      const url: string = `${this.todosUrl}/${todo.id}`;
      return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: any): Observable<Todo> {
      return this.http.post<any>(this.todosUrl, todo, httpOptions);
  }
      
}
