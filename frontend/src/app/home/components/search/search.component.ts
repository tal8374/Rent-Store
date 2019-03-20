import {Component, OnInit} from '@angular/core';
import {SearchCar} from '../../../shared/models/search-car.model';
import {SearchDataShareService} from '../../../shared/services/search-data-share.service';
import {Router} from '@angular/router';
import {CarService} from '../../../shared/services/car.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCar: SearchCar = new SearchCar();

  constructor(private searchDataShareService: SearchDataShareService, private router: Router, private carService: CarService) {
  }

  ngOnInit() {
  }

  onSearchClicked() {
    this.searchDataShareService.changeMessage(this.searchCar);

    this.router.navigate(['/search']);
  }

  getManufacturers(): Array<string> {
      return this.carService.getManufacturers();
  }
}
