import {Component, EventEmitter, Output} from '@angular/core';
import {SearchCar} from '../../../../shared/models/search-car.model';
import {Car} from '../../../../shared/models/car.model';
import {OrderDetails} from '../../../../shared/models/order-datails.model';
import {CarService} from '../../../../shared/services/car.service';

@Component({
  selector: 'car-management-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent {

  searchCarForm: SearchCar = new SearchCar();
  car: Car;
  order: OrderDetails;
  showNotFoundCar: boolean = false;
  @Output() onSearchCarChange: EventEmitter<Car> = new EventEmitter();

  constructor(private carService: CarService) {
  }

  onSearchCar() {
    this.carService.getCar(new Car({number: this.searchCarForm.order.car.number})).subscribe(backendRespnd => {

    });

    if(this.car) {
      this.onSearchCarChange.emit(this.car);
      this.showNotFoundCar = false;
    } else {
      this.showNotFoundCar = true;
    }
  }
}
