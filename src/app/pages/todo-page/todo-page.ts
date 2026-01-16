import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../../services/todo-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-page.html',
  styleUrls: ['./todo-page.scss'],
})
export class TodoPage {
  todo$!: Observable<Todo>; // Observable holding the single todo data

  constructor(
    private route: ActivatedRoute, // Provides access to route parameters
    private todoService: TodoService // Service to fetch todo data from API
  ) {}

  ngOnInit() {
    // Get the todo ID from the route and fetch the corresponding todo
    this.todo$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id')); // Extract 'id' from route params
        return this.todoService.getTodoById(id); // Fetch todo by ID from the service
      })
    );
  }
}
