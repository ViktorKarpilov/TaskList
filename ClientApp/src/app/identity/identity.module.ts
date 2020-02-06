import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Pages/Main/main/main.component';
import { RegistrationComponent } from './Registration/registration/registration.component';
import { IdentityComponent } from './identity/identity.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [ RegistrationComponent, IdentityComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [IdentityComponent]
})
export class IdentityModule { }
