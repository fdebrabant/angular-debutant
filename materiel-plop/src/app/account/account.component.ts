import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'mp-account',
  template: `
      <h1>Mon compte</h1>
      <pre>{{user | json}}</pre>
  `
})
export class AccountComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (this.userService.isConnected()) {
      this.user = this.userService.connectedUser;
    } else {
      this.router.navigate(['/account/create']);
    }
  }
}
