import { GraphQLModule, ModuleContext } from '@graphql-modules/core';
import * as typeDefs from './schema.graphql';
import resolvers from './user.resolver';
import { UserProvider } from './user.provider';
import { UserContext } from './models/interfaces';

export const UserModule = new GraphQLModule<{}, {}, UserContext>({
  typeDefs,
  resolvers,
  providers: [UserProvider],
  context: (_, context: ModuleContext) => {
    return {
      provider: context.injector.get(UserProvider),
    };
  },
});
