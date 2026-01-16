import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../../services/todo-service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos-page',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule for *ngFor and RouterModule for navigation
  templateUrl: './todos-page.html',
  styleUrls: ['./todos-page.scss'],
})
export class TodosPage {
  todos$!: Observable<Todo[]>; // Observable that will hold the list of top 10 todos

  constructor(private todoService: TodoService) {} // Inject TodoService to fetch todos

  ngOnInit() {
    this.todos$ = this.todoService.getTodos(10); // Fetch top 10 todos when component initializes
  }
}
