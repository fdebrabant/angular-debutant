import {User} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  private resourceUrl = '/api/user';

  private user: User = null;

  constructor(private httpService: HttpClient) {
  }

  create(user: User): Promise<boolean> {
    return this.httpService.post<boolean>(`${this.resourceUrl}/create`, user)
      .toPromise()
      .then(() => {
        this.user = user;
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  login(user: User): Promise<boolean> {
    return new Promise((resolve) => {
      this.user = user;
      resolve(true);
    });
  }

  get connectedUser(): User {
    return this.user;
  }

  isConnected(): boolean {
    return this.user !== null;
  }
}
