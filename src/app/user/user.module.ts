import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [
//   { path: '', component: ProfileComponent }
// ];

@NgModule({
  declarations: [UserComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
    //RouterModule.forChild(routes)
  ]
})
export class UserModule { }
