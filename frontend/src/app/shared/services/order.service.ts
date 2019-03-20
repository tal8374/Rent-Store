import {Injectable} from '@angular/core';
import {RentForm} from '../models/rent.form';
import {Car} from '../models/car.model';
import {Order} from '../models/order.model';

@Injectable()
export class OrderService {

  constructor() {
  }

  getOrderStatuses(): Array<string> {
    return ['active', 'historic'];
  }

  getOrderTotalSum(car: Car, rentForm: RentForm) {
    return 0;
  }

  getOrders(): Array<Order> {
    const order = {
      _id: '3123',
      beginningRent: new Date(),
      endRent: new Date(),
      totalSum: 123123,
    };

    const user = {
      _id: '1',
      firstName:
        'first name',
      lastName:
        'last name',
      userName:
        'user name',
      password:
        '31231231231',
      ID:
        '31231231231',
      sex:
        'male',
      email:
        'email',
      dateOfBirth:
        new Date(),
      image:
        'https://www.akademi.adengrup.com.tr/resimler/egitmenler/307482205256774854474505_medium.jpg',
      role: [
        'user',
      ]
    };

    return [
      new Order({orderDetails: order, user: user}),
      new Order({orderDetails: order, user: user})
    ];
  }

  updateOrder(order: Order): void {

  }

  removeOrder(order: Order) {

  }
}
