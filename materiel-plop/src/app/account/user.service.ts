import {User} from './user.model';

export class UserService {

  private user: User = null;

  create(user: User): Promise<boolean> {
    return new Promise((resolve) => this.login(user).then(() => resolve(true)));
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
