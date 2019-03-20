import {Component, ViewChild} from '@angular/core';
import {SearchCar} from '../../../shared/models/search-car.model';
import {CarsComponent} from './cars/cars.component';

@Component({
  selector: 'user-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  searchCar: SearchCar;
  @ViewChild('userOrderCars') userOrderCarsComponent: CarsComponent;

  onSearchChange(searchCar: SearchCar) {
    this.searchCar = searchCar;

    this.userOrderCarsComponent.applyFilter();
  }
}
