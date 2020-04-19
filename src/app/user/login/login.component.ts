import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string
  password:string

  constructor(private authenticationService : AuthenticationService) { }

  login(formValues)
  {
    this.authenticationService.loginUser(formValues.userName, formValues.password);
    console.log(formValues);
  }

  ngOnInit(): void {
  }

}
