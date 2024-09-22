import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
  },
];
