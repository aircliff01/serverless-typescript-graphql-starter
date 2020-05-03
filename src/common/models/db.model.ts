export interface DBDataResult<T> {
  error: Error;
  count: number;
  record: T;
  records: T[];
}

export interface DBTransactionResult {
  success: boolean;
  error: Error;
}

export enum Order {
  ASC = 'A',
  DESC = 'Z',
}
