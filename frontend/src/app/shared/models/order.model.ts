import {OrderDetails} from './order-datails.model';
import {User} from './user.model';
import {Car} from './car.model';

export class Order {
  _id?: string;
  orderDetails?: OrderDetails;
  car?: Car;
  user?: User;
  status?: String;


  constructor(init?: Partial<Order>) {
    this.orderDetails = new OrderDetails();
    this.car = new Car();
    this.user = new User();
    Object.assign(this, init);
  }
}
