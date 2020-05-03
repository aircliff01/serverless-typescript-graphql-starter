import { APIGatewayEvent } from 'aws-lambda';
import { AuthTokenPayload } from '../../common/models/auth.model';
import { UserProvider } from './user.provider';
import { IUserTokenResult, IUser } from '@generated/types';

export interface UserContext {
  event: APIGatewayEvent;
  subject: AuthTokenPayload;
  userProvider: UserProvider;
}

// defines the fields of the user table and columns in the DB
export class tUser {
  static readonly table = 'users';
  static readonly id = 'id';
  static readonly email = 'email';
  static readonly password = 'password';
  static readonly verifyEmailToken = 'verify_email_token';
}

// token result returned when a user is created or authenticated
export interface UserTokenResult extends IUserTokenResult {}
export class UserTokenResult {
  __typename? = 'UserTokenResult'; // for graphql union

  constructor(params: UserTokenResult) {
    Object.assign(this, params);
  }
}

export interface User extends IUser {}
export class User {
  __typename? = 'User'; // for graphql union
  password: string; // this is not exposed to graphql

  constructor(params: User) {
    Object.assign(this, params);
    delete this.password; // we dont want password to leak to the UI
  }
}
