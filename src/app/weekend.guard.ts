import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeekendGuard implements CanActivate {

  constructor(private router: Router) {} // Inject Router to navigate if access is denied

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const bypass = route.queryParamMap.get('bypass') === 'true'; // Check for 'bypass=true' query parameter

    if (bypass) {
      return true; // Allow access if bypass query parameter is present
    }

    const today = new Date().getDay(); // Get current day (Sunday = 0, Saturday = 6)
    const isWeekend = today === 0 || today === 6; // Check if today is Saturday or Sunday

    if (isWeekend) {
      return true; // Allow access if today is a weekend
    }

    // If not weekend and no bypass, show message and redirect to home
    alert('Weekend page is only available on Saturday or Sunday!');
    this.router.navigate(['/home']);
    return false; // Deny access
  }
}
