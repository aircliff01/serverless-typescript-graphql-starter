import { Injectable } from '@graphql-modules/di';
import { OnInit } from '@graphql-modules/core';
import { Logger } from '@common/helpers/logger';
import { DBDataResult, DBTransactionResult } from '@common/models/db.model';
import * as DataApi from 'data-api-client';
import * as sql from 'sql-query';

@Injectable() // only for graphql module
export class DBProvider implements OnInit {
  static readonly dialect = 'mysql';
  // this is used for building insert sql queries.
  // For more information check https://github.com/dresende/node-sql-query#readme
  static get insert() {
    return sql.Query(this.dialect).insert();
  }

  static get select() {
    return sql.Query(this.dialect).select();
  }

  static get update() {
    return sql.Query(this.dialect).update();
  }

  static get remove() {
    return sql.Query(this.dialect).remove();
  }

  logger = new Logger(DBProvider.name);

  dataAPI: DataApi;

  onInit() {
    this.dataAPI = DataApi({
      secretArn: process.env.SECRET_ARN,
      resourceArn: process.env.RESOURCE_ARN,
      database: process.env.DB_NAME,
    });

    this.logger.info('Serverless Data API initialized!');
  }

  /**
   * Executes a query using the AWS Data API, this automatically invokes the client to send the queries
   * to Aurora serverless.
   *
   * To see additional information and queries that can be sent to the client,
   * See https://github.com/jeremydaly/data-api-client
   *
   * @param query SQL query to be executed
   * @param params any additional params to the passed to the query engine
   */
  async dataQuery<T>(query: string, params?: any): Promise<DBDataResult<T>> {
    this.logger.debug(`[query]: ${query}, [params]: ${params}`);

    return await this.dataAPI
      .query(query, params)
      .then(
        (result: any) =>
          ({
            error: null,
            count: result?.numberOfRecordsUpdated,
            record: result?.records && result?.records[0],
            records: result?.records,
          } as DBDataResult<T>),
      )
      .then(result => {
        this.logger.debug(`[result]: ${JSON.stringify(result, null, 2)}`);
        return result;
      })
      .catch((error: any) => {
        this.logger.error(error);
        return { error } as DBDataResult<T>;
      });
  }

  /**
   * Queries to be executed in a transaction
   *
   * @param queries queries to be executed in a transaction
   */
  async dataTransactionQuery(queries: { query: string; params?: any }[]): Promise<DBTransactionResult> {
    const transaction = this.dataAPI.transaction();

    // map all queries in the transaction
    for (const query of queries) {
      this.logger.debug(`[transactionQuery]: ${query.query}, [params]: ${query.params}`);
      transaction.query(query.query, query.params);
    }

    // execute the transaction
    return await transaction
      .rollback((_, status) => {
        this.logger.debug(`[transactionRollbackStatus]: ${JSON.stringify(status, null, 2)}`);
      })
      .commit()
      .then((_: any) => ({ success: true } as DBTransactionResult))
      .catch((error: Error) => {
        this.logger.error(error);
        return { success: false, error } as DBTransactionResult;
      });
  }
}
