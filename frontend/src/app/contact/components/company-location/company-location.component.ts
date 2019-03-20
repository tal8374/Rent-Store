import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'company-location',
  templateUrl: './company-location.component.html',
  styleUrls: ['./company-location.component.css']
})
export class CompanyLocationComponent implements OnInit {
  companyDetail;
  locationImage = 'https://cdn2.iconfinder.com/data/icons/national-and-politican-pointers-of-countries/154/country-pointer-geo-location-japan-512.png';

  constructor() {
    this.companyDetail = {
      city: 'city name',
      neighborhood: 'neighborhood',
      street: 'street'
    };
  }

  ngOnInit() {
  }


}
