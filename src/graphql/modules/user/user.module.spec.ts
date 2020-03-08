import 'reflect-metadata';

import { UserModule } from './user.module';
import { execute, GraphQLSchema } from 'graphql';
import { UserProvider } from './user.provider';
import { gql } from 'apollo-server-lambda';

describe('UserModule', () => {
  const schema: GraphQLSchema = UserModule.schema;

  beforeEach(async () => {
    UserModule.injector.provide({
      provide: UserProvider,
      overwrite: true,
      useValue: {
        users: [],
        getUserById: (_: number) => ({ _id: 1, username: 'name' }),
      },
    });
  });

  it('should return a valid response for user', async () => {
    const document = gql`
      query {
        user(id: 0) {
          id
          username
        }
      }
    `;

    const result = await execute({
      schema,
      document,
    });

    expect(result.errors).toBeFalsy();
    expect(result.data['user']['id']).toBe('1');
    expect(result.data['user']['username']).toBe('name');
  });
});
