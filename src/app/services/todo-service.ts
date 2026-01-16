import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface representing a Todo item
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Base URL for Todo API

  constructor(private http: HttpClient) {} // Inject HttpClient to make HTTP requests

  // Fetch a list of todos with an optional limit (default 10)
  getTodos(limit: number = 10): Observable<Todo[]> {
    const params = new HttpParams().set('_limit', limit.toString()); // Set query parameter for limit
    return this.http.get<Todo[]>(this.apiUrl, { params }); // Make GET request and return Observable
  }

  // Fetch a single todo by its ID
  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`); // GET request for a specific todo
  }
}
