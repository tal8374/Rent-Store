import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {RentComponent} from './components/rent/rent.component';
import {OptionsComponent} from './components/options/options.component';
import {DetailsComponent} from './components/details/details.component';
import {SuccessComponent} from './components/success/success.component';
import {CollectPointsComponent} from './components/collect-points/collect-points.component';
import {CarModule} from '../car/car.module';
import {AvailableDataComponent} from './components/rent/available-data/available-data.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CarModule,
    RouterModule.forChild([
      {path: 'details/:carId', component: DetailsComponent},
      {path: 'rent/:carId', component: RentComponent},
      {path: 'rent/:carId/success/:orderId', component: SuccessComponent},
      {path: 'collection-points/:carId', component: CollectPointsComponent},
    ])
  ],
  declarations: [
    OptionsComponent,
    RentComponent,
    DetailsComponent,
    SuccessComponent,
    CollectPointsComponent,
    AvailableDataComponent,
  ],
  exports: [
    RentComponent,
  ],
})
export class RentModule {
}
