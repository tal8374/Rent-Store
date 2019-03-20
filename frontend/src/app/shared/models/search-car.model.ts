import {Order} from './order.model';
import {Car} from './car.model';

export class SearchCar {
  freeSearch?: string;
  order?: Order;
  car?: Car;

  constructor(init?: Partial<SearchCar>) {
    this.order = new Order();
    Object.assign(this, init);
  }
}
