import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentService} from '../../../shared/services/rent.service';
import {OrderDetails} from '../../../shared/models/order-datails.model';

@Component({
  selector: 'rent-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  orderSummary: OrderDetails;

  constructor(private activeRoute: ActivatedRoute, private rentService: RentService) {
    this.setOrderDetails();
  }

  setOrderDetails() {
    this.activeRoute.paramMap
      .subscribe(params => {
        const orderId = params.get('orderId');

        this.orderSummary = this.rentService.getOrderDetails(orderId);
      });
  }

}
