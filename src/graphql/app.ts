import "reflect-metadata";
import "graphql-import-node"; // You should add this at the begininng of your entry file.

import { ApolloServer } from "apollo-server-lambda";
import { GraphQLModule } from "@graphql-modules/core";
import { UserModule } from "@modules/user/user.module";

const AppModule = new GraphQLModule({
  imports: [UserModule]
});

const server = new ApolloServer({
  schema: AppModule.schema,
  context: session => session
});

export default server;
