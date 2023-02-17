import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'customers',
    loadChildren: () =>
      loadRemoteModule('customers', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      loadRemoteModule('orders', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule('home', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then(
        (m) => m.LoginRemoteEntryModule
      ),
  },
];
