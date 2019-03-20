import {User} from './user.model';

export class Rent {
  _id?: string;
  startDate?: Date;
  returnDate?: Date;
  actualReturnDate?: Date;
  user?: User;

  constructor(init?: Partial<Rent>) {
    Object.assign(this, init);
  }
}
