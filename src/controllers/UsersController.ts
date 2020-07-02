import User from '@models/User';

export default class UsersController {
  user: User;

  teste() {
    this.user = new User();
  }
}
