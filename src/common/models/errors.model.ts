import { IAuthError, INotFound, IInternalError, IGqlError } from '@generated/types';

export interface GqlError extends IGqlError {}
export class GqlError {
  __typename = 'GqlError'; // for graphql union

  constructor(public message: string) {}
}

export interface InternalError extends IInternalError {}
export class InternalError {
  __typename = 'InternalError'; // for graphql union

  constructor(public message: string) {}
}

export interface AuthError extends IAuthError {}
export class AuthError {
  __typename = 'AuthError'; // for graphql union

  constructor(public message: string) {}
}

export interface NotFound extends INotFound {}
export class NotFound {
  __typename = 'NotFound'; // for graphql union

  constructor(public message: string) {}
}
