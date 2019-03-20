import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
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
