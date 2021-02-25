import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.userService.getActiveUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

}
