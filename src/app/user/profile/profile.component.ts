import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup


  constructor(private authenticationService: AuthenticationService,
    @Inject(TOASTR_TOKEN) private toastrService : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    let firstName = new FormControl(this.authenticationService.getLoggedInUserDetails().firstName,
    [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName = new FormControl(this.authenticationService.getLoggedInUserDetails().lastName,
    Validators.required);
    this.profileForm = new FormGroup(
      {
        firstName: firstName,
        lastName: lastName
      }
    );
  }


  saveUpdate()
  {
    if (!this.profileForm.valid)
    {
      return;
    }
    this.authenticationService.updateUserDetails(
      this.profileForm.value.firstName,
      this.profileForm.value.lastName
    )
    //this.router.navigate(['events']);
    this.toastrService.success('Profile Saved!!');
  }

  handleCancel()
  {
    this.router.navigate(['events']);
  }

}
