import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string
  password:string

  constructor(private authenticationService : AuthenticationService,
    private router : Router) { }

  login(formValues)
  {
    this.authenticationService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {
  }

}
