import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '@ng-mf/shared/data-access-user';

@Component({
  selector: 'ng-mf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {

  logged = true;

  constructor(private userService: UserService) {}

  logout() {
    this.logged = false;
    this.userService.logout();
  }
}
