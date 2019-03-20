export class RentForm {
  beginningRentDate: Date;
  endOfRentDate: Date;

  constructor(init?: Partial<RentForm>) {
    Object.assign(this, init);
  }
}
