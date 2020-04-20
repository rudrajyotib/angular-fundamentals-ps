import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup


  constructor(private authenticationService: AuthenticationService,
    private router : Router) { }

  ngOnInit(): void {
    let firstName = new FormControl(this.authenticationService.getLoggedInUserDetails().firstName);
    let lastName = new FormControl(this.authenticationService.getLoggedInUserDetails().lastName);
    this.profileForm = new FormGroup(
      {
        firstName: firstName,
        lastName: lastName
      }
    );
  }


  saveUpdate()
  {
    this.authenticationService.updateUserDetails(
      this.profileForm.value.firstName,
      this.profileForm.value.lastName
    )
    this.router.navigate(['events']);
  }

  handleCancel()
  {
    this.router.navigate(['events']);
  }

}
