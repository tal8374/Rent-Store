import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SearchCar} from '../../../../shared/models/search-car.model';
import {CarService} from '../../../../shared/services/car.service';
import {SearchDataShareService} from '../../../../shared/services/search-data-share.service';

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  @Output() onSearchCarChange: EventEmitter<SearchCar> = new EventEmitter();
  @Input('searchCar') searchCar: SearchCar = new SearchCar();

  constructor(private searchDataShareService: SearchDataShareService, private carService: CarService) {
  }

  ngOnInit() {
    this.searchDataShareService.currentMessage.subscribe(searchData => {
      this.searchCar = new SearchCar(searchData);

      this.handleSearchCarUpdate();
    });
  }

  handleSearchCarUpdate() {
    this.onSearchCarChange.emit(this.searchCar);
  }

  onFreeSearchChange(freeSearch) {
    this.searchCar.freeSearch = freeSearch;

    this.handleSearchCarUpdate();
  }

  onBeginningRentDateChange(beginningRentDate) {
    this.searchCar.order.orderDetails.beginningRentDate = beginningRentDate;

    this.handleSearchCarUpdate();
  }

  onEndRentDateChange(endRentDate) {
    this.searchCar.order.orderDetails.endRentDate = endRentDate;

    this.handleSearchCarUpdate();
  }

  onManufacturerChange(manufacturer) {
    this.searchCar.order.car.creationYear = manufacturer;

    this.handleSearchCarUpdate();
  }

  onTypeChange(type) {
    this.searchCar.order.car.type = type;

    this.handleSearchCarUpdate();
  }

  onModelChange(model) {
    this.searchCar.order.car.model = model;

    this.handleSearchCarUpdate();
  }

  onGearChange(gear) {
    this.searchCar.order.car.gear = gear;

    this.handleSearchCarUpdate();
  }

  onManufactureDateChange(manufactureDate) {
    this.searchCar.order.car.creationYear = manufactureDate;

    this.handleSearchCarUpdate();
  }

  getGearOptions(): Array<string> {
    return this.carService.getCarGearOptions();
  }

  getCarTypes(): Array<string> {
    return this.carService.getCarTypes();
  }

  getManufacturers(): Array<string> {
    return this.carService.getManufacturers();
  }
}

