import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Session } from 'src/app/dataObjects/event-data-objects';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit , OnChanges{

  @Input() sessions : Session[];
  @Input() filterBy : string;

  visibleSessions : Session[];

  constructor() { }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.sessions)
    {
      this.filterSessions(this.sessions, this.filterBy);
    }
  }

  filterSessions(allSessions : Session[], levelFilter : string) : void
  {
    if ('all' === levelFilter)
    {
      this.visibleSessions =  allSessions.slice(0);
    }else
    {
      this.visibleSessions = allSessions.filter(session => {
        return (session.level.toLocaleUpperCase() === levelFilter.toLocaleUpperCase());
      });
    }
  }

  ngOnInit(): void {
     }

}
