import {Component, Input} from '@angular/core';
import {Car} from '../../../../shared/models/car.model';
import {UserService} from '../../../../shared/services/user.service';
import {SearchCar} from '../../../../shared/models/search-car.model';

@Component({
  selector: 'user-order-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @Input('searchCar') searchCar: SearchCar;
  userCars: Array<Car>;
  userFilteredCars: Array<Car>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userCars = this.userService.getCars();
    this.userFilteredCars = this.userCars;
    this.applyFilter();
  }

  public applyFilter() {
    this.userFilteredCars = (this.isCarSearchExists()) ?
      this.userCars.filter(car => this.isCarAdheresToTheConditions(car)) : this.userCars;
  }

  private isCarAdheresToTheConditions(car: Car): boolean {
    return this.isCarNumberAppropriate(car) || this.isOrderStatusAppropriate(car);
  }

  private isCarNumberAppropriate(car: Car): boolean {
    if (!this.searchCar.order || !this.searchCar.order.car ) {
      return false;
    }

    if(!car.number) {
      return false;
    }

    return this.searchCar.order.car.number === '' || car.number.includes(this.searchCar.order.car.number);
  }

  private isOrderStatusAppropriate(car: Car): boolean {
    if (!this.searchCar.order || !this.searchCar.order.status) {
      return false;
    }

    if(!car.orderStatus) {
      return false;
    }

    return this.searchCar.order.status === 'All' || car.orderStatus === this.searchCar.order.status;
  }

  isExistsCars(): boolean {
    return this.userCars.length > 0;
  }

  private isCarSearchExists() {
    return this.searchCar !== null && this.searchCar !== undefined;
  }
}
