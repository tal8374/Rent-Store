import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '../shared/shared.module';
import {CompanyDetailComponent} from './components/company-detail/company-detail.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {CompanyLocationComponent} from './components/company-location/company-location.component';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'contact', component: ContactComponent},
    ])
  ],
  declarations: [
    CompanyDetailComponent,
    ContactFormComponent,
    ContactComponent,
    CompanyLocationComponent,
  ]
})
export class ContactModule {
}
