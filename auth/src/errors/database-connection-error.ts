import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to DB';
  statusCode = 500;

  constructor() {
    super('Default error db connect');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
