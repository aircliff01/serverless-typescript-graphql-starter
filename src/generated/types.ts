import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ModuleContext } from '@graphql-modules/core';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export interface IAuthError  extends IGqlError {
  message: Scalars['String'];
}

export interface ICreateUserInput {
  email: Scalars['String'];
  password: Scalars['String'];
}


export type IGqlError = {
  message: Scalars['String'];
};

export interface IInternalError  extends IGqlError {
  message: Scalars['String'];
}

export interface IMutation {
  createUser: IUserAuthResult;
}


export type IMutationCreateUserArgs = {
  data: ICreateUserInput;
};

export interface INotFound  extends IGqlError {
  message: Scalars['String'];
}

export interface IPaginationInput {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}

export interface IQuery {
  user: IUserResult;
  getUserAuthToken: IUserAuthResult;
}


export type IQueryGetUserAuthTokenArgs = {
  data: IUserAuthInput;
};

export interface IUser {
  id: Scalars['ID'];
  email: Scalars['String'];
  verifyEmailToken?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
}

export interface IUserAuthInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

export type IUserAuthResult = IUserTokenResult | IAuthError;

export type IUserResult = IUser | IAuthError;

export interface IUserTokenResult {
  token: Scalars['String'];
  user: IUser;
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  UserResult: IResolversTypes['User'] | IResolversTypes['AuthError'],
  User: ResolverTypeWrapper<IUser>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  AuthError: ResolverTypeWrapper<IAuthError>,
  GQLError: IResolversTypes['AuthError'] | IResolversTypes['NotFound'] | IResolversTypes['InternalError'],
  UserAuthInput: IUserAuthInput,
  UserAuthResult: IResolversTypes['UserTokenResult'] | IResolversTypes['AuthError'],
  UserTokenResult: ResolverTypeWrapper<IUserTokenResult>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateUserInput: ICreateUserInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  PaginationInput: IPaginationInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  NotFound: ResolverTypeWrapper<INotFound>,
  InternalError: ResolverTypeWrapper<IInternalError>,
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Query: {},
  UserResult: IResolversParentTypes['User'] | IResolversParentTypes['AuthError'],
  User: IUser,
  ID: Scalars['ID'],
  String: Scalars['String'],
  AuthError: IAuthError,
  GQLError: IResolversParentTypes['AuthError'] | IResolversParentTypes['NotFound'] | IResolversParentTypes['InternalError'],
  UserAuthInput: IUserAuthInput,
  UserAuthResult: IResolversParentTypes['UserTokenResult'] | IResolversParentTypes['AuthError'],
  UserTokenResult: IUserTokenResult,
  Mutation: {},
  CreateUserInput: ICreateUserInput,
  Boolean: Scalars['Boolean'],
  Date: Scalars['Date'],
  PaginationInput: IPaginationInput,
  Int: Scalars['Int'],
  NotFound: INotFound,
  InternalError: IInternalError,
};

export type IAuthErrorResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['AuthError'] = IResolversParentTypes['AuthError']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface IDateScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date'
}

export type IGqlErrorResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['GQLError'] = IResolversParentTypes['GQLError']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'NotFound' | 'InternalError', ParentType, ContextType>,
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
};

export type IInternalErrorResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['InternalError'] = IResolversParentTypes['InternalError']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IMutationResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createUser?: Resolver<IResolversTypes['UserAuthResult'], ParentType, ContextType, RequireFields<IMutationCreateUserArgs, 'data'>>,
};

export type INotFoundResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['NotFound'] = IResolversParentTypes['NotFound']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IQueryResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  user?: Resolver<IResolversTypes['UserResult'], ParentType, ContextType>,
  getUserAuthToken?: Resolver<IResolversTypes['UserAuthResult'], ParentType, ContextType, RequireFields<IQueryGetUserAuthTokenArgs, 'data'>>,
};

export type IUserResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  verifyEmailToken?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IUserAuthResultResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['UserAuthResult'] = IResolversParentTypes['UserAuthResult']> = {
  __resolveType: TypeResolveFn<'UserTokenResult' | 'AuthError', ParentType, ContextType>
};

export type IUserResultResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['UserResult'] = IResolversParentTypes['UserResult']> = {
  __resolveType: TypeResolveFn<'User' | 'AuthError', ParentType, ContextType>
};

export type IUserTokenResultResolvers<ContextType = ModuleContext, ParentType extends IResolversParentTypes['UserTokenResult'] = IResolversParentTypes['UserTokenResult']> = {
  token?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<IResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IResolvers<ContextType = ModuleContext> = {
  AuthError?: IAuthErrorResolvers<ContextType>,
  Date?: GraphQLScalarType,
  GQLError?: IGqlErrorResolvers,
  InternalError?: IInternalErrorResolvers<ContextType>,
  Mutation?: IMutationResolvers<ContextType>,
  NotFound?: INotFoundResolvers<ContextType>,
  Query?: IQueryResolvers<ContextType>,
  User?: IUserResolvers<ContextType>,
  UserAuthResult?: IUserAuthResultResolvers,
  UserResult?: IUserResultResolvers,
  UserTokenResult?: IUserTokenResultResolvers<ContextType>,
};


