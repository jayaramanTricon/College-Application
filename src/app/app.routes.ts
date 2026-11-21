import { Routes } from '@angular/router';
import { Login } from './login/login';
import { AdminControl } from './admin-control/admin-control';
import { Students } from './students/students';
import { Instructors } from './instructors/instructors';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'Admin', component: AdminControl},
  {path: 'students', component: Students},
  {path: 'instructors', component: Instructors},
  {path: '**', component: PageNotFound}, //WildCard route
];
