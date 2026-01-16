import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePage {

  constructor(private router: Router) {} // Inject Router to navigate programmatically

  goToTodo() {
    this.router.navigate(['/todos']); // Navigate to the Todos page
  }

  goToWeekend() {
    this.router.navigate(['/weekend-party']); // Navigate to the Weekend page
  }
}
