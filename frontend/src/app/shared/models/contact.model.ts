export class Contact {
  firstName: string;
  lastName: string;
  email: string;
  message: string;

  constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
  }
}
