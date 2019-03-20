import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CarService} from '../../../shared/services/car.service';

@Component({
  selector: 'management-cars-type',
  templateUrl: './cars-type.component.html',
  styleUrls: ['./cars-type.component.css']
})
export class CarsTypeComponent implements OnInit {

  carTypes: Array<string>;

  constructor(private carService: CarService) {
    this.carTypes = this.carService.getCarTypes();
  }

  ngOnInit() {
  }

  onUpdateTypesClicked(): void {
    this.carService.updateType();
  }

  onCarTypeRemoveClicked(index: number): void {
    this.carTypes.splice(index, 1);
  }

  onNewCarTypeClicked(carType: string): void {
    this.carService.createNewCarType(carType);
  }
}
