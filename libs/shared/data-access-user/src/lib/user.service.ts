import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn;
  isUserLoggedIn$: Observable<boolean>;

  constructor() {
    let logged = false;
    if(localStorage.getItem('logged')) {
      logged = localStorage.getItem('logged') === 'true';
    }

    this.isUserLoggedIn = new BehaviorSubject(logged);
    this.isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  }

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      localStorage.setItem('logged', 'true');
      this.isUserLoggedIn.next(true);
      return true;
    }

    localStorage.setItem('logged', 'false');
    return false;
  }

  logout() {
    localStorage.setItem('logged', 'false');
    this.isUserLoggedIn.next(false);
  }
}
