import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import jwt, { SignOptions } from 'jsonwebtoken';
import { Logger } from '@common/helpers/logger';
import { AuthTokenPayload, SessionTokenPayload } from '@common/models/auth.model';
import { AuthError } from '@common/models/errors.model';

export class Utils {
  static readonly logger = new Logger(Utils.name);

  // options for signing and decoding JWTs
  static readonly JWTSignOptions: SignOptions = {
    issuer: 'app.authorization.engine',
    audience: 'web',
    subject: 'user',
    expiresIn: '30d',
    algorithm: 'HS256',
  };

  /**
   * Generates a unique id
   */
  static getUniqueId(): string {
    return uuidv4().replace(/-/g, '');
  }

  /**
   * Vaidates that the current user has a valid token
   */
  static authenticate = (next) => (root, args, context: any, info) => {
    if (!context?.subject?.id) {
      return new AuthError('Unauthenticated Access!');
    }

    return next(root, args, context, info);
  };

  /**
   * Generates a unique and strong crypto hex string with the specified random id
   * included.
   *
   * @param randomId id to be included in the secret
   */
  static generateSecret(randomId: string): string {
    return crypto.createHash('sha256').update(uuidv4()).update(randomId).update(new Date().toString()).digest('hex');
  }

  /**
   * Generates a JWT token for the specified payload
   *
   * @param payload data to be encoded into JWT token
   */
  static generateAuthToken(payload: AuthTokenPayload): Promise<string> {
    return new Promise((resolve, _) => {
      jwt.sign(payload, process.env.JWT_SECRET, this.JWTSignOptions, (error, token) => {
        if (error) {
          this.logger.error(error, 'Sign Auth JWT Error');
        }

        resolve(token);
      });
    });
  }

  /**
   * Generates a JWT token for the specified payload
   *
   * @param payload data to be encoded into JWT token
   */
  static generateSessionToken(payload: SessionTokenPayload): Promise<string> {
    return new Promise((resolve, _) => {
      jwt.sign(payload, process.env.JWT_SECRET, this.JWTSignOptions, (error, token) => {
        if (error) {
          this.logger.error(error, 'Sign Session JWT Error');
        }

        resolve(token);
      });
    });
  }

  /**
   * Validates and returns the payload in a JWT token.
   *
   * @param token token to be decoded
   */
  static decodeJWT(token: string): Promise<AuthTokenPayload> {
    return new Promise((resolve, _) => {
      jwt.verify(token, process.env.JWT_SECRET, this.JWTSignOptions, (_, decoded) => {
        resolve(decoded as AuthTokenPayload);
      });
    });
  }
}
