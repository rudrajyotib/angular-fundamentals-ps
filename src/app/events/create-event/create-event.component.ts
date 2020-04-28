import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';
import { ToastrService, TOASTR_TOKEN } from 'src/app/common/toastr.service';

@Component({
  selector: 'CreateNewEvent',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty : boolean = true;
  newEvent;

  constructor(private routerService : Router, private eventService : EventService, 
    @Inject(TOASTR_TOKEN) private toaster : ToastrService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues)
  {
    this.eventService.saveEvent(formValues);
    this.toaster.success('Success', 'new event '+formValues.name+' saved');
    this.isDirty=false;
    this.routerService.navigate(['/events']);
  }

  cancel()
  {
    this.routerService.navigate(['/events']);
  }
}
