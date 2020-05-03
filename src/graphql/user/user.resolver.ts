import { Utils } from '@common/helpers/utils';
import {
  IQueryResolvers,
  IMutationResolvers,
  IResolvers,
  IUserResolvers,
  IQueryGetUserAuthTokenArgs,
  IMutationCreateUserArgs,
} from '@generated/types';
import { UserContext, User } from './user.model';

/**
 * Query for individual fields
 **********************************************/
const UserFields: IUserResolvers<UserContext, User> = {
  firstName: async (root: User) => {
    return root.firstName;
  },
};

/**
 * Queries
 **********************************************/
const Query: IQueryResolvers<UserContext> = {
  // get authentication token for the user
  getUserAuthToken: async (_: any, args: IQueryGetUserAuthTokenArgs, ctx: UserContext) => {
    return await ctx.userProvider.getUserAuthToken(args.data);
  },
  // retrieve the current user
  user: Utils.authenticate(async (_: any, __: any, ctx: UserContext) => {
    return await ctx.userProvider.findUserById(ctx.subject.id);
  }),
};

/**
 * Mutations
 **********************************************/
const Mutation: IMutationResolvers<UserContext> = {
  // creates new user
  createUser: async (_: any, args: IMutationCreateUserArgs, ctx: UserContext) => {
    return await ctx.userProvider.createUser(args.data);
  },
};

export default { Query, Mutation, User: UserFields } as IResolvers<UserContext>;
