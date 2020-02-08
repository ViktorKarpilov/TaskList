import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Pages/Main/main/main.component';
import { RegistrationComponent } from './Registration/registration/registration.component';
import { IdentityComponent } from './identity/identity.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ RegistrationComponent, IdentityComponent, LoginComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'reg', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  exports: [IdentityComponent]
})
export class IdentityModule { }
