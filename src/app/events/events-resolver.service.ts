import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../shared/event.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService implements Resolve<any>{


  resolve()
  {
    return this.eventService.getEvents().pipe(map(event => event));
  }

  constructor(private eventService : EventService) { }
}
