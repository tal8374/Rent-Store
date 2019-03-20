import {Component, EventEmitter, Output} from '@angular/core';
import {SearchCar} from '../../../../shared/models/search-car.model';
import {OrderService} from '../../../../shared/services/order.service';

@Component({
  selector: 'user-orders-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() onSearchCarChange: EventEmitter<SearchCar> = new EventEmitter();

  searchCarDetail: SearchCar = new SearchCar();

  constructor(private orderService: OrderService) {
  }

  handleSearchCarUpdate(): void {
    this.onSearchCarChange.emit(this.searchCarDetail);
  }

  onOrderStatusChange(orderStatus: string): void {
    this.searchCarDetail.order.status = orderStatus;

    this.handleSearchCarUpdate();
  }

  onCarNumberChange(number: string): void {
    this.searchCarDetail.order.car.number = number ? number : '';

    this.handleSearchCarUpdate();
  }

  getOrderStatuses(): Array<string> {
    return ['All', ...this.orderService.getOrderStatuses()];
  }
}
