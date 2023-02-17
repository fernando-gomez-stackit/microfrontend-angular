import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '@ng-mf/shared/data-access-user';
@Component({
  selector: 'ng-mf-login-entry',
  templateUrl: './login-entry.component.html',
  styleUrls: ['./login-entry.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginRemoteEntryComponent {
  username = '';
  password = '';
  isValid = true;

  constructor(private userService: UserService) {}

  login() {
    this.isValid = this.userService.checkCredentials(this.username, this.password);
  }
}
