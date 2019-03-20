import {Component, Input} from '@angular/core';
import {Car} from '../../../shared/models/car.model';
import {Branch} from '../../../shared/models/branch.model';

@Component({
  selector: 'car-detail-card',
  templateUrl: './car-detail-card.component.html',
  styleUrls: ['./car-detail-card.component.css']
})
export class CarDetailCardComponent {
  @Input('car') car: Car;
  @Input('branch') branch: Branch;

  constructor() {
  }
}
