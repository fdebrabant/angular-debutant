import {async, fakeAsync, tick} from '@angular/core/testing';
import {UserService} from './user.service';
import {User} from './user.model';

describe('ProductService', () => {

  const user = new User();
  user.gender = 'Mr';
  user.firstName = 'John';
  user.lastName = 'Doe';
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('Should have no user logged in by default', () => {
    expect(userService.isConnected()).toBe(false);
  });

  it('Should have connected user after login', fakeAsync(() => {
    userService.login(user);
    tick();
    expect(userService.isConnected()).toBe(true);
  }));

  it('Should have connected user after account has been created', fakeAsync(() => {
    userService.create(user);
    tick();
    expect(userService.isConnected()).toBe(true);
  }));

  it('Should return the user used during login process', fakeAsync(() => {
    userService.login(user);
    tick();
    expect(userService.connectedUser).toBe(user);
  }));

});
