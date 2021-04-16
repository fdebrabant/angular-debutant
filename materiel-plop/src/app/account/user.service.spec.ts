import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {UserService} from './user.service';
import {User} from './user.model';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {

  const user = new User();
  user.gender = 'Mr';
  user.firstName = 'John';
  user.lastName = 'Doe';
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject<HttpTestingController>(HttpTestingController as any);
  });

  it('Should have no user logged in by default', () => {
    expect(userService.isConnected()).toBe(false);
  });

  it('Should have connected user after login', fakeAsync(() => {
    userService.login(user);
    tick();
    expect(userService.isConnected()).toBe(true);
  }));

  it('Should create a new user', fakeAsync(() => {
    // when
    userService.create(user);
    const req = httpMock.expectOne('/api/user/create');
    req.flush({});
    tick();

    // then
    expect(req.request.body).toEqual(jasmine.objectContaining(user));
    httpMock.verify();
  }));

  it('Should have connected user after account has been created', fakeAsync(() => {
    // when
    userService.create(user);
    const request = httpMock.expectOne('/api/user/create');
    request.flush({});
    tick();

    // then
    expect(userService.isConnected()).toBe(true);
  }));

  it('Should return the user used during login process', fakeAsync(() => {
    userService.login(user);
    tick();
    expect(userService.connectedUser).toBe(user);
  }));

});
