import { Injectable } from '@graphql-modules/di';
import { User } from './models/interfaces';

@Injectable()
export class UserProvider {
  users: User[] = [
    {
      _id: 0,
      username: 'Jimmy',
    },
  ];

  getUserById(id: number): User {
    return this.users.find(user => user._id == id);
  }
}
