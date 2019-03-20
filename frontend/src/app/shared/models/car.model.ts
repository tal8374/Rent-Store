import {Rent} from './rent.model';

export class Car {
  _id?: string;
  name?: string;
  creationYear?: number;
  number?: string;
  gear?: string;
  image?: string;
  type?: string;
  model?: string;
  mileage?: number;
  isAvailableForRent?: boolean;
  isProperForRent?: boolean;
  orderStatus?: string;
  rents?: Array<Rent>;

  constructor(init?: Partial<Car>) {
    Object.assign(this, init);
  }
}
