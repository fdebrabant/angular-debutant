import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User, GENDER_LIST, COUNTRY_LIST, Gender, Country} from './user.model';

@Component({
  selector: 'mp-account-create',
  templateUrl: './account-create.component.html'
})
export class AccountCreateComponent implements OnInit {
  user: User;
  genderList: Array<Gender> = GENDER_LIST;
  countryList: Array<Country> = COUNTRY_LIST;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.initUser();
  }

  initUser(): void {
    this.user = new User();
    this.user.gender = 'Mr';
  }
}
