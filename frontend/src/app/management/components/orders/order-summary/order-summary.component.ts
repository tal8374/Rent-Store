import {Component, OnInit, Input} from '@angular/core';
import {OrderService} from '../../../../shared/services/order.service';
import {Order} from '../../../../shared/models/order.model';

@Component({
  selector: 'management-orders-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  sexOption = ['female', 'male'];
  @Input('order') order: Order;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
  }

  onUpdateClicked(): void {
    this.orderService.updateOrder(this.order);
  }

  onRemoveClicked(): void {
    this.orderService.removeOrder(this.order);
  }
}
