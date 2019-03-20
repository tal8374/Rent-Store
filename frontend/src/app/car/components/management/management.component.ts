import {Component} from '@angular/core';
import {Car} from '../../../shared/models/car.model';

@Component({
  selector: 'car-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {

  car: Car;

  constructor() {
  }

  onSearchCarChange(car: Car) {
    this.car = car;
  }
}
