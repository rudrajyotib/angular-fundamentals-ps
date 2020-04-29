import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { EventService } from 'src/app/shared/event.service';
import { Session } from 'src/app/dataObjects/event-data-objects';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchedSessions: Session[];
  searchTerm : string;

  constructor(public authenticationService: AuthenticationService,
    private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.searchedSessions = sessions;
      console.log(sessions);
    }
    );
  }

}
