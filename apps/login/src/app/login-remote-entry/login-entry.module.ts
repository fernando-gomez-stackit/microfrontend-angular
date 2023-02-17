import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRemoteEntryComponent } from './login-entry.component';
import { remoteRoutes } from './login-entry.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginRemoteEntryComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class LoginRemoteEntryModule {}
