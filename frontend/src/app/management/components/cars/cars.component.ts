import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../shared/services/car.service';
import {Car} from '../../../shared/models/car.model';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {Cars} from '../../../shared/models/cars.model';

@Component({
  selector: 'management-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Cars;
  backendResponse: BackendResponse;

  constructor(private carService: CarService) {
    this.carService.getCars().subscribe(backendResponse => {
        this.backendResponse = backendResponse;

        if (this.isErrorExist()) {
          this.handleGetCarsError();
        } else {
          this.handleGetCarsSuccess();
        }
    });
  }

  ngOnInit() {
  }

  onUpdateCarDetailsClicked(car: Car): void {
    this.carService.updateCar(car);
  }

  getCarTypes(): Array<string> {
    return this.carService.getCarTypes();
  }

  getCarGearOptions(): Array<string> {
    return this.carService.getCarGearOptions();
  }

  getAvailableOptions(): Array<string> {
    return this.carService.getAvailableOptions();
  }

  getProperOptions(): Array<string> {
    return this.carService.getProperOptions();
  }

  private isErrorExist() {
    return false;
  }

  private handleGetCarsError() {

  }

  private handleGetCarsSuccess() {
    this.cars = new Cars(this.backendResponse.responseData);
  }
}
