import { GetUserArgs, User, UserContext } from './models/interfaces';

export default {
  Query: {
    user: (_, { id }: GetUserArgs, context: UserContext) => context.provider.getUserById(id),
  },
  User: {
    id: (user: User) => user._id,
    username: (user: User) => user.username,
  },
};
