import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ToastrService, TOASTR_TOKEN } from '../common/toastr.service';


//import { ToastrService, TOASTR_TOKEN } from './common/toastr.service';

let toastr : ToastrService = window['toastr'];

@NgModule({
  declarations: [UserComponent, ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],providers: [
    { provide : TOASTR_TOKEN , useValue : toastr}
  ],
})
export class UserModule { }
