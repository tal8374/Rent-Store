import {Component, OnInit} from '@angular/core';
import {Order} from '../../../shared/models/order.model';
import {OrderService} from '../../../shared/services/order.service';

@Component({
  selector: 'management-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Array<Order>;

  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders();
  }

  ngOnInit() {
  }

}
