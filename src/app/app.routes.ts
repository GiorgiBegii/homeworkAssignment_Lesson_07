import { Routes } from '@angular/router';
import { TodosPage } from './pages/todos-page/todos-page';
import { HomePage } from './pages/home-page/home-page';
import { TodoPage } from './pages/todo-page/todo-page';
import { WeekendPartyPage } from './pages/weekend-party-page/weekend-party-page';
import { WeekendGuard } from './weekend.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect root
    { path: 'home', component: HomePage },
    { path: 'todos', component: TodosPage },
    { path: 'todos/:id', component: TodoPage },
    { 
        path: 'weekend-party',
        loadComponent: () => import('./pages/weekend-party-page/weekend-party-page').then(m => m.WeekendPartyPage),
        canActivate: [WeekendGuard]
    },
    { path: '**', redirectTo: '/home' },
];
