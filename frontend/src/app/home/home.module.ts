import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {DetailComponent} from './components/detail/detail.component';
import {CarListComponent} from './components/car-list/car-list.component';
import {CarModule} from '../car/car.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CarModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent},
    ])
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    DetailComponent,
    CarListComponent,
  ]
})
export class HomeModule {
}
