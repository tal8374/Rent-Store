import {Component, Input} from '@angular/core';

@Component({
  selector: 'car-collect-points',
  templateUrl: './collect-points.component.html',
  styleUrls: ['./collect-points.component.css']
})
export class CollectPointsComponent {

  companyDetail;
  locationImage = 'https://cdn2.iconfinder.com/data/icons/national-and-politican-pointers-of-countries/154/country-pointer-geo-location-japan-512.png';

  constructor() {
    this.companyDetail = {
      city: 'city name',
      neighborhood: 'neighborhood',
      street: 'street'
    };
  }

}
