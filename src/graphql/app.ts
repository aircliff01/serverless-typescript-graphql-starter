import 'reflect-metadata';
import 'graphql-import-node'; // You should add this at the begininng of your entry file.

import { ApolloServer } from 'apollo-server-lambda';
import { GraphQLModule } from '@graphql-modules/core';
import { Utils } from '@common/helpers/utils';

import { Logger } from '@common/helpers/logger';
import { UserModule } from './user/user.module';

const logger = new Logger('App');

// header name for extracting JWT token
const HEADER_NAME = 'Authorization';

const AppModule = new GraphQLModule({
  imports: [UserModule],
});

const server = new ApolloServer({
  schema: AppModule.schema,
  formatError(error) {
    logger.error(error);
    return error;
  },

  async context(session) {
    const token = session?.event?.headers[HEADER_NAME];

    return {
      event: session?.event,
      subject: await Utils.decodeJWT(token),
    };
  },
});

export default server;
