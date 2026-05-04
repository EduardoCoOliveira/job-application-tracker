import { Routes } from '@angular/router';
import { Applications } from './components/applications/applications';
import { Register } from './components/register/register';
import { Details } from './components/details/details';

export const routes: Routes = [
  {
    path: '',
    component: Applications,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'details/:id',
    component: Details,
  },
  {
    path: 'details',
    redirectTo: 'details/1',
    pathMatch: 'full',
  },
];
