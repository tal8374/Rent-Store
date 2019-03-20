export class User {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  ID: string;
  sex: string;
  email: string;
  dateOfBirth: Date;
  image: string;
  role: Array<string>;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
