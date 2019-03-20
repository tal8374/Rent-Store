import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../../../shared/models/car.model';
import {CarService} from '../../../../shared/services/car.service';
import {RentForm} from '../../../../shared/models/rent.form';
import {OrderService} from '../../../../shared/services/order.service';

@Component({
  selector: 'car-rent-available-data',
  templateUrl: './available-data.component.html',
  styleUrls: ['./available-data.component.css']
})
export class AvailableDataComponent implements OnInit {

  @Input('car') car: Car;
  @Input('rentForm') rentForm: RentForm;

  constructor(private carService: CarService, private orderService: OrderService) {
  }

  ngOnInit(): void {
  }


  getDailyCost(): number {
    return this.carService.getDailyRentCost(this.car);
  }

  getLateReturnCost(): number {
    return this.carService.getLateReturnCost(this.car);
  }

  getNumberOfDaysToRent(): number {
    if(this.rentForm.endOfRentDate === undefined || this.rentForm.beginningRentDate === undefined) {
      return 0;
    }

    const endOfRentDate: Date = new Date(this.rentForm.endOfRentDate);
    const beginningRentDate: Date = new Date(this.rentForm.beginningRentDate);

    const difference = endOfRentDate.getTime() - beginningRentDate.getTime();

    return (difference) / (24 * 3600 * 1000);
  }

  getOrderTotalSum(): number {
    return this.orderService.getOrderTotalSum(this.car, this.rentForm);
  }
}
