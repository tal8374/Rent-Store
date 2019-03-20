import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {CarModule} from './car/car.module';
import {ContactModule} from './contact/contact.module';
import {HomeModule} from './home/home.module';
import {RentModule} from './rent/rent.module';
import {UserModule} from './user/user.module';
import {ManagementModule} from './management/management.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    CarModule,
    ManagementModule,
    UserModule,
    RentModule,
    HomeModule,
    ContactModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
