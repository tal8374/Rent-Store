import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ])
  ],
  declarations: [
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
