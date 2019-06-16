import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User, GENDER_LIST, COUNTRY_LIST, Gender, AddressDelivery, Country} from './user.model';
import {UserService} from './user.service';

@Component({
  selector: 'mp-account-create',
  templateUrl: './account-create.component.html'
})
export class AccountCreateComponent implements OnInit {
  user: User;
  genderList: Array<Gender> = GENDER_LIST;
  countryList: Array<Country> = COUNTRY_LIST;
  @ViewChild('myForm', {static: false}) ngForm: NgForm;

  constructor(public router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.initUser();
  }

  initUser(): void {
    this.user = new User();
    this.user.gender = 'Mr';
  }

  save(): void {
    if (this.ngForm.valid) {
      this.userService
        .create(this.user)
        .then(() => this.router.navigate(['/account']));
    }
  }

  addDeliveryAddress(): void {
    this.user.addressesDelivery.push(new AddressDelivery());
  }

  removeDeliveryAddress(index: number): void {
    this.user.addressesDelivery.splice(index, 1);
  }

  setDefaultDeliveryAddress(selectedIndex: number): void {
    this.user.addressesDelivery.forEach((address: AddressDelivery, index: number) => {
      if (index !== selectedIndex) {
        address.isDefault = false;
      }
    });
  }

  get debug(): string {
    return JSON.stringify(this.user);
  }
}
