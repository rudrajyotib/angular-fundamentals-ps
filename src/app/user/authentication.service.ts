import { Injectable } from '@angular/core';
import { User } from '../dataObjects/user-data-objects';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 currentUser : User

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

  updateUserDetails(firstName : string, lastName : string)
  {
    if (firstName && !(""===firstName))
    {
      this.currentUser.firstName=firstName;
    }
    if (lastName && !(""===lastName))
    {
      this.currentUser.lastName=lastName;
    }
  }

}
