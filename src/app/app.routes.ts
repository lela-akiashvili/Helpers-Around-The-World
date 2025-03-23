import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'recovery',
    pathMatch: 'full',
    loadComponent: () =>
      import('./auth/recover/recover.component').then(
        (c) => c.RecoverComponent
      ),
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./auth/sign-in/sign-in.component').then((c) => c.SignInComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./auth/sign-up/sign-up.component').then((c) => c.SignUpComponent),
  },
];
