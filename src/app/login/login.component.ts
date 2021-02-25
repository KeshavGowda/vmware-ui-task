import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.userService.authenticate(this.email, this.password).subscribe((response: boolean) => {
      if (response) {
        this.router.navigate(['home']);
      } else {
        this.loginFailed = true;
      }
    });
  }

}
