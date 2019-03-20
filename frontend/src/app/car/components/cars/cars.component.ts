import {Component, OnInit} from '@angular/core';
import {Car} from '../../../shared/models/car.model';
import {CarService} from '../../../shared/services/car.service';
import {SearchCar} from '../../../shared/models/search-car.model';
import {SearchDataShareService} from '../../../shared/services/search-data-share.service';
import {Cars} from '../../../shared/models/cars.model';
import {BackendResponse} from '../../../shared/models/backend-response.model';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Cars;
  backendResponse: BackendResponse;
  filteredCars: Cars;
  searchData: SearchCar;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(backendResponse => {
      this.backendResponse = backendResponse;

      if (this.isErrorExist()) {
        this.handleGetCarsError();
      } else {
        this.handleGetCarsSuccess();
      }
    });
  }

  private isErrorExist() {
    return false;
  }

  private handleGetCarsError() {

  }

  private handleGetCarsSuccess() {
    this.cars = new Cars(this.backendResponse.responseData);
    this.filteredCars = this.cars;
  }

  private applyFilter() {
    this.filteredCars.cars = (this.searchData) ?
      this.cars.cars.filter(car => this.isCarAdheresToTheConditions(car, this.searchData)) : this.cars.cars;
  }

  private isCarAdheresToTheConditions(car: Car, searchData: SearchCar): boolean {
    return this.isCarFreeSearchAppropriate(car, searchData) && this.isBeginningDateAppropriate(car, searchData) &&
      this.isReturningDateAppropriate(car, searchData) && this.isManufacturerAppropriate(car, searchData) &&
      this.isCarTypeAppropriate(car, searchData) && this.isCarModelAppropriate(car, searchData) &&
      this.isCarGearAppropriate(car, searchData) && this.isManufacturerDateAppropriate(car, searchData);
  }

  private isManufacturerDateAppropriate(car: Car, searchData: SearchCar): boolean {
    return true;
  }

  private isCarGearAppropriate(car: Car, searchData: SearchCar): boolean {
    if (!searchData.order.car.gear || searchData.order.car.gear === '') {
      return true;
    }

    return searchData.order.car.gear === car.gear;
  }

  private isCarModelAppropriate(car: Car, searchData: SearchCar): boolean {
    return true;
  }

  private isCarTypeAppropriate(car: Car, searchData: SearchCar): boolean {
    if (!searchData.order.car.type || searchData.order.car.type === '') {
      return true;
    }

    return searchData.order.car.type === car.type;
  }

  private isManufacturerAppropriate(car: Car, searchData: SearchCar): boolean {
    return true;
  }

  private isReturningDateAppropriate(car: Car, searchData: SearchCar): boolean {
    return true;
  }

  private isBeginningDateAppropriate(car: Car, searchData: SearchCar): boolean {
    return true;
  }

  private isCarFreeSearchAppropriate(car: Car, searchData: SearchCar): boolean {
    if (!searchData.freeSearch || searchData.freeSearch === '') {
      return true;
    }

    return car.name.includes(searchData.freeSearch) || car.gear.includes(searchData.freeSearch) ||
       car.type.includes(searchData.freeSearch);
  }

  private onSearchChange(searchData: SearchCar) {
    this.searchData = searchData;

    this.applyFilter();
  }

}
