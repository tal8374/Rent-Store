export class OrderDetails {
  _id?: string;
  beginningRentDate?: Date;
  endRentDate?: Date;
  totalSum?: number;

  constructor(init?: Partial<OrderDetails>) {
    Object.assign(this, init);
  }
}
