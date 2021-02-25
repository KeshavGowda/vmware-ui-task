import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /** Hard coded credentials */
  private readonly USER_EMAIL: string = 'user@test.com';

  private activeUser: string = '';
  private readonly USER_KEY = 'active-user';

  constructor() { 
    if (localStorage.hasOwnProperty(this.USER_KEY)) {
      this.activeUser = window.atob(localStorage.getItem(this.USER_KEY));
    }
  }

  public getActiveUser(): string {
    return this.activeUser;
  }

  /**
   * Mock service to validate user login. Validates against a hardcoded email and password.
   * 
   * @param email email id of the user (username)
   * @param password password of the user
   */
  authenticate(email: string, password: string): Observable<boolean> {
    this.activeUser = email;
    localStorage.setItem(this.USER_KEY, window.btoa(email));
    return of(this.isValidUser(email));
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
    this.activeUser = '';
  }

  isLoggedIn() {
    return this.activeUser !== '' && this.isValidUser(this.activeUser);
  }

  /**
   * Mock method to validate user supplied credentials against hard coded values. Returns true if they match.
   * 
   * @param email email id of the user
   * @param password password of the user
   */
  private isValidUser(email: string): boolean {
    return email === this.USER_EMAIL;
  }

}
