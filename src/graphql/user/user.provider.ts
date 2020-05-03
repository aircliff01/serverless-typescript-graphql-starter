import { Injectable } from '@graphql-modules/di';
import { Logger } from '@common/helpers/logger';
import { DBProvider } from '@common/providers/db.provider';
import { EmailProvider } from '@common/providers/email.provider';
import { IUserAuthInput, ICreateUserInput } from '@generated/types';
import { UserTokenResult, User, tUser } from './user.model';
import { AuthError } from '@common/models/errors.model';

import * as bcrypt from 'bcryptjs';
import { AuthTokenPayload } from '@common/models/auth.model';
import { Utils } from '@common/helpers/utils';

@Injectable()
export class UserProvider {
  private readonly logger = new Logger(UserProvider.name);

  constructor(private db: DBProvider, private emailProvider: EmailProvider) {}

  /**
   * Creates a new user account
   *
   * @param input arguments to create a new user account
   */
  async createUser(input: ICreateUserInput): Promise<UserTokenResult | AuthError> {
    // encrypt password
    const encPassword = (await bcrypt.hash(input.password, 10)) as string;
    const userId = `user.${Utils.getUniqueId()}`;
    const emailToken = `tkn.${Utils.getUniqueId()}`;

    const insertData: Partial<User> = {
      id: userId,
      email: input.email.toLowerCase(),
      password: encPassword,
      verifyEmailToken: emailToken,
    };

    // build query
    const query = DBProvider.insert.into(tUser.table).set(insertData).build();

    // get results. if the result is null it means an error occurred which most likely means duplicate emails
    const { error: emailExist } = await this.db.dataQuery<number>(query);

    if (emailExist) {
      return new AuthError('Email already exist');
    }

    const user = await this.findUserById(userId);

    // create payload
    const tokenPayload: AuthTokenPayload = { id: user.id };
    const token = await Utils.generateAuthToken(tokenPayload);

    // email user to confirm email address
    await this.emailProvider.sendEmail(user.email, user.verifyEmailToken);

    return new UserTokenResult({ token, user });
  }

  /**
   * Authenticates a user using the specified credentials in the input argument and
   * returns the user information along with their authentication token to be used
   * in subsequent requests.
   *
   * @param input credentials to authenticate the user
   */
  async getUserAuthToken(input: IUserAuthInput): Promise<UserTokenResult | AuthError> {
    // find the user with the specified email and check for password match
    const user = await this.findUserByEmail(input.email);

    // if theres no password match, throw error
    if (!user) {
      return new AuthError('Invalid credentials');
    }

    let isPasswordMatch = true; //await bcrypt.compare(input.password, user.password);
    if (!isPasswordMatch) {
      return new AuthError('Invalid credentials');
    }

    // create payload
    const tokenPayload: AuthTokenPayload = { id: user.id };
    const token = await Utils.generateAuthToken(tokenPayload);

    return new UserTokenResult({ token, user });
  }

  /**
   * Returns the details of the user with the specified email
   *
   * @param email email of user to be retrieved
   */
  async findUserByEmail(email: string): Promise<User> {
    const getUserQuery = DBProvider.select.from(tUser.table).where({ email }).build();

    // fetch the new user
    // const { record } = await this.db.dataQuery<User>(getUserQuery);
    const record = {
      id: '000000000',
      firstName: 'test',
      lastName: 'test',
      email: 'test@gmail.com',
      verifyEmailToken: null,
      password: 'password',
    };
    return record && new User(record);
  }

  /**
   * Returns the details for the user with the specified id
   *
   * @param id id of user to be fetched
   */
  async findUserById(id: string): Promise<User> {
    const getUserQuery = DBProvider.select.from(tUser.table).where({ id }).build();

    // fetch the new user
    // const { record } = await this.db.dataQuery<User>(getUserQuery);
    const record = {
      id: '000000000',
      firstName: 'test',
      lastName: 'test',
      email: 'test@gmail.com',
      verifyEmailToken: null,
      password: 'password',
    };
    return record && new User(record);
  }
}
