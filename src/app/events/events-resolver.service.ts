import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../shared/event.service';
import {map} from 'rxjs/operators';
import { Event } from '../dataObjects/event-data-objects';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService implements Resolve<Event[]>{


  resolve()
  {
    return this.eventService.getEvents().pipe(map(event => event));
  }

  constructor(private eventService : EventService) { }
}
