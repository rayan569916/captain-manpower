import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Captain Manpower — Skilled workforce for Saudi projects',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    title: 'Services — Captain Manpower',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'talent',
    title: 'Talent pool — Captain Manpower',
    loadComponent: () => import('./pages/talent/talent').then((m) => m.Talent),
  },
  {
    path: 'jobs',
    title: 'Open positions — Captain Manpower',
    loadComponent: () => import('./pages/jobs/jobs').then((m) => m.Jobs),
  },
  {
    path: 'about',
    title: 'About — Captain Manpower',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    title: 'Request manpower — Captain Manpower',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
