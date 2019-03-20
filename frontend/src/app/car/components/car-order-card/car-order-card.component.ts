import {Component, Input} from '@angular/core';
import {Car} from '../../../shared/models/car.model';
import {Router} from '@angular/router';
import {Branch} from '../../../shared/models/branch.model';

@Component({
  selector: 'car-order-card',
  templateUrl: './car-order-card.component.html',
  styleUrls: ['./car-order-card.component.css']
})
export class CarOrderCardComponent {
  @Input('car') car: Car;
  @Input('branch') branch: Branch;
  @Input('show-actions') showActions = true;

  constructor(private router: Router) {
  }

  onBuyCarClicked() {
    this.router.navigate(['/details', this.car._id]);
  }
}
