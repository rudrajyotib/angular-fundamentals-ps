import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path : 'profile', component:ProfileComponent},
  { path: '**', redirectTo:'profile', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
