import { BaseContext } from '@shared/interfaces/context.interface';
import { UserProvider } from '../user.provider';

export interface UserContext extends BaseContext<UserProvider> {
  provider: UserProvider;
}

export interface User {
  _id: number;
  username: string;
}

export interface GetUserArgs {
  id: number;
}
