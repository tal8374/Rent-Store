import {Injectable} from '@angular/core';
import {RentForm} from '../models/rent.form';
import {OrderDetails} from '../models/order-datails.model';
import {Car} from '../models/car.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BackendResponse} from '../models/backend-response.model';
import {Observable} from 'rxjs';
import {Rent} from '../models/rent.model';

@Injectable()
export class RentService {

  constructor(private http: HttpClient) {
  }

  createRent(car: Car, userRentDetail: RentForm) {

  }

  getOrderDetails(orderId: string): OrderDetails {
    return new OrderDetails({
      _id: '313123123',
      beginningRentDate: new Date(),
      endRentDate: new Date(),
      totalSum: 123123123
    });
  }

  getTotalSum() {
    return 0;
  }

  returnCar(car: Car) {

  }
}
