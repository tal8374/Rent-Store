import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {CarModule} from '../car/car.module';

import {OrdersComponent} from './components/orders/orders.component';
import {SearchComponent} from './components/orders/search/search.component';
import {CarsComponent} from './components/orders/cars/cars.component';
import {PersonalAreaComponent} from './components/personal-area/personal-area.component';
import {AuthGuard} from '../shared/services/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CarModule,
    RouterModule.forChild([
      {path: 'personal-area', component: PersonalAreaComponent},
      {path: 'user-orders', component: OrdersComponent},
    ])
  ],
  declarations: [
    OrdersComponent,
    PersonalAreaComponent,
    SearchComponent,
    CarsComponent,
  ],
  exports: [],
})
export class UserModule {
}
