import { Injectable } from '@angular/core';
import { User } from '../dataObjects/user-data-objects';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser : User

  constructor() { }

  loginUser(userName:string, password:string)
  {
    this.currentUser={
      id:1,
      userName:userName,
      firstName:'Rudrajyoti',
      lastName:'Biswas'
    }
  }

  getLoggedInUserDetails()
  {
    return this.currentUser;
  }

  isAuthenticated():boolean
  {
    return !!this.currentUser;
  }

}
