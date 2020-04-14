import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ValidEventIdGuard } from './events/guard/valid-event-id.guard';
import { EventNotFoundComponent } from './errors/event-not-found.component';
import { CreateEventComponent } from './events/create/create-event.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new',  component:CreateEventComponent },
  { path: 'events/:id', canActivate: [ValidEventIdGuard], component:EventDetailsComponent },
  {path:'eventNotFound', component : EventNotFoundComponent},
  { path: '**', redirectTo: 'events', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    EventNotFoundComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
