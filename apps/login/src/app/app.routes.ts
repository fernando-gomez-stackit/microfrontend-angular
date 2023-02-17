import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./login-remote-entry/login-entry.module').then((m) => m.LoginRemoteEntryModule),
  },
];
