import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UserService} from './services/user.service';
import {CarService} from './services/car.service';
import {RentService} from './services/rent.service';
import {SearchDataShareService} from './services/search-data-share.service';
import {GoogleMapsComponent} from './components/google-maps/google-maps.component';
import {ContactService} from './services/contact.service';
import {AuthGuard} from './services/auth-guard.service';
import {OrderService} from './services/order.service';
import {BranchService} from './services/branch.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    GoogleMapsComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    GoogleMapsComponent,
  ],
  providers: [
    UserService,
    CarService,
    RentService,
    BranchService,
    OrderService,
    AuthGuard,
    ContactService,
    SearchDataShareService,
  ]
})
export class SharedModule {
}
