import {Component, Input} from '@angular/core';
import {RentService} from '../../../../shared/services/rent.service';
import {Car} from '../../../../shared/models/car.model';

@Component({
  selector: 'car-return-summary',
  templateUrl: './return-summary.component.html',
  styleUrls: ['./return-summary.component.css']
})
export class ReturnSummaryComponent {

  toShowInformation: boolean = true;
  totalSum: number;
  @Input('car') car: Car;

  constructor(private rentService: RentService) {
  }

  onReturnCarClicked() {
    this.returnCar();

    this.setTotalSum();

    this.car = null;
  }

  private setTotalSum(): void {
    this.totalSum = this.rentService.getTotalSum();
  }

  private returnCar(): void {
    this.rentService.returnCar(this.car);
  }

  getTotalSum(): number {
    return this.rentService.getTotalSum();
  }
}
