import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {CarsComponent} from './components/cars/cars.component';
import {CarSearchComponent} from './components/cars/car-search/car-search.component';
import {CarOrderCardComponent} from './components/car-order-card/car-order-card.component';
import {CarDetailCardComponent} from './components/car-detail-card/car-detail-card.component';
import {ManagementComponent} from './components/management/management.component';
import {SearchCarComponent} from './components/management/search-car/search-car.component';
import {ReturnSummaryComponent} from './components/management/return-summary/return-summary.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'search', component: CarsComponent},
      {path: 'car-management', component: ManagementComponent},
    ])
  ],
  declarations: [
    CarsComponent,
    CarSearchComponent,
    CarOrderCardComponent,
    ManagementComponent,
    ReturnSummaryComponent,
    SearchCarComponent,
    CarDetailCardComponent,
  ],
  exports: [
    CarOrderCardComponent,
    ManagementComponent,
    CarDetailCardComponent,
  ],
})
export class CarModule {
}
