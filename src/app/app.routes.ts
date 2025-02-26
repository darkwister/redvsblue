import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about-serie',
    loadComponent: () => import('./pages/about-serie/about-serie.page').then( m => m.AboutSeriePage)
  },
  {
    path: 'in-my-life',
    loadComponent: () => import('./pages/in-my-life/in-my-life.page').then( m => m.InMyLifePage)
  },
  {
    path: 'hire-me',
    loadComponent: () => import('./pages/hire-me/hire-me.page').then( m => m.HireMePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
