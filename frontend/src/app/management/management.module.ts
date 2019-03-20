import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {OptionsComponent} from './components/options/options.component';
import {CarsComponent} from './components/cars/cars.component';
import {OrdersComponent} from './components/orders/orders.component';
import {UsersComponent} from './components/users/users.component';
import {CarsTypeComponent} from './components/cars-type/cars-type.component';
import {UserComponent} from './components/users/user/user.component';
import {OrderSummaryComponent} from './components/orders/order-summary/order-summary.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'management-area/cars', component: CarsComponent},
      {path: 'management-area/orders', component: OrdersComponent},
      {path: 'management-area/users', component: UsersComponent},
      {path: 'management-area/cars-role', component: CarsTypeComponent},
    ])
  ],
  declarations: [
    OptionsComponent,
    CarsComponent,
    OrdersComponent,
    UsersComponent,
    UserComponent,
    OrderSummaryComponent,
    CarsTypeComponent,
  ]
})
export class ManagementModule {
}
