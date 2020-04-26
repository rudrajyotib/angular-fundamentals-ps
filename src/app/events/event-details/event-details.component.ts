import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Event, Session } from 'src/app/dataObjects/event-data-objects';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event : Event;
  addMode : boolean = false;
  filterBy : string = 'all';

  constructor(private eventService : EventService, 
    private activatedRoute : ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    this.event = this.eventService.getEventDetails(Number(id));
  }

  handleBackButton()
  {
    this.router.navigate(['/events']);
  }

  saveNewSession(session : Session)
  {
    this.addMode=false;
    if (!session)
    {
      return;
    }
    var maxId = Math.max.apply(null, this.event.sessions?.map(session => session.id));
    session.id = maxId+1;
    this.event.sessions.push(session);
  }

  addSession()
  {
    this.addMode=true;
  }
}
