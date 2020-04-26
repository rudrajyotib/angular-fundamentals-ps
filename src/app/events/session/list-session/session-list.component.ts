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
  @Input() sortBy : string;

  visibleSessions : Session[];

  constructor() { }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.sessions)
    {
      this.filterAndSortSessions(this.sessions, this.filterBy, this.sortBy);
    }
  }

  filterAndSortSessions(allSessions : Session[], levelFilter : string, sortBy:string) : void
  {
    let filteredAndSortedSessions :  Session[];
    if ('all' === levelFilter)
    {
      filteredAndSortedSessions =  allSessions.slice(0);
    }else
    {
      filteredAndSortedSessions = allSessions.filter(session => {
        return (session.level.toLocaleUpperCase() === levelFilter.toLocaleUpperCase());
      });
    }
    if (sortBy && !("" === this.sortBy))
    {
      switch (sortBy.toUpperCase())
      {
        case 'VOTES': filteredAndSortedSessions.sort( (session1, session2) => {
          return session1.voters?.length - session2.voters?.length;
        });
        break;
        case 'NAME':filteredAndSortedSessions.sort((session1, session2)=>
        {
          return session1.name.localeCompare(session2.name);
        });
        break;
        default: break;
      }
    }
    this.visibleSessions = filteredAndSortedSessions;
  }

  ngOnInit(): void {
     }

}
