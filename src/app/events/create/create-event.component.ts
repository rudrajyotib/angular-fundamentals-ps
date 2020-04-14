import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'CreateNewEvent',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty : boolean = true;

  constructor(private routerService : Router) { }

  ngOnInit(): void {
  }

  handleCancelOfCreateNewForm()
  {
    this.routerService.navigate(['/events']);
  }
}
