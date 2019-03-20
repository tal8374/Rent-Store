export class MongoDBError {
  code?: number;
  driver?: boolean;
  errmsg?: string;
  index?: number;
  name?: string;

  constructor(init?: Partial<MongoDBError>) {
    Object.assign(this, init);
  }
}
