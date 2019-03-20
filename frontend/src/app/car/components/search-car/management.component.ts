import {Component} from '@angular/core';
import {SearchCar} from '../../../shared/models/search-car.model';
import {CarService} from '../../../shared/services/car.service';
import {Car} from '../../../shared/models/car.model';

@Component({
  selector: 'car-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {

  searchCarForm: SearchCar = new SearchCar();
  car: Car;

  constructor(private carService: CarService) {
  }

  onSearchCarClicked() {
    this.carService.getCar(new Car({number: this.searchCarForm.order.car.number})).subscribe(backendRespnd => {

    });
  }
}
