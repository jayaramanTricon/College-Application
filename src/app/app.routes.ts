import { Routes } from '@angular/router';
import { Login } from './login/login';
import { AdminControl } from './admin-control/admin-control';
// import { Students } from './admin-control/students/students';
// import { Instructors } from './admin-control/instructors/instructors';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'admin', component: AdminControl,
    // children: [
    //   {path: 'students/', component: Students},
    //   {path: ':name', component: Instructors},
    // ]
  },
  {path: '**', component: PageNotFound}, //WildCard route
];
