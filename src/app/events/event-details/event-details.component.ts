import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event : any
 

  constructor(private eventService : EventService, 
    private activatedRoute : ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log('loading event details for id::'+id);
    this.event = this.eventService.getEventDetails(Number(id));
  }

  handleBackButton()
  {
    this.router.navigate(['/events']);
  }

}
