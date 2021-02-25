import { Injectable } from '@angular/core';
import { UserService } from './user.service.service';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthValidateService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /** Checks if user is already logged in. If not direct him to login page */
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
