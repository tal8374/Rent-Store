import {MongoDBError} from './mongodb-error.model';

export class BackendError {
  mongoDBError?: MongoDBError;

  constructor(init?: Partial<BackendError>) {
    Object.assign(this, init);
  }
}
