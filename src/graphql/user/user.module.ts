import { GraphQLModule, ModuleContext } from '@graphql-modules/core';
import resolvers from './user.resolver';
import { DBProvider } from '@common/providers/db.provider';
import { EmailProvider } from '@common/providers/email.provider';
import { UserProvider } from './user.provider';
import { UserContext } from './user.model';

import { mergeTypeDefs } from '@graphql-toolkit/schema-merging';
import * as typeDefs from './user.schema.graphql';
import * as commonTypeDefs from '@common/schemas/common.schema.graphql';

export const UserModule = new GraphQLModule<{}, {}, UserContext>({
  typeDefs: mergeTypeDefs([commonTypeDefs, typeDefs]),
  resolvers,
  providers: [DBProvider, EmailProvider, UserProvider],
  async context(session, context: ModuleContext) {
    return {
      event: (session as any).event,
      subject: (session as any).subject,
      userProvider: context.injector.get(UserProvider),
    };
  },
});
