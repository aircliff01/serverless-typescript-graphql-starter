import { Injectable } from '@graphql-modules/di';

@Injectable()
export class EmailProvider {
  async sendEmail(email: string, token: string) {}
}
