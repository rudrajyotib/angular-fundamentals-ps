import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ValidEventIdGuard } from './events/guard/valid-event-id.guard';
import { EventNotFoundComponent } from './errors/event-not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ExitCreateNewEventGuard } from './events/guard/exit-create-new-event.guard';
import { EventsResolverService } from './events/events-resolver.service';
import { CreateSessionComponent } from './events/session/create-session/create-session.component';
import { SessionListComponent } from './events/session/list-session/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { ToastrService, TOASTR_TOKEN } from './common/toastr.service';
import { JQUERY_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/modals/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modals/directives/modal-trigger.directive';

let toastr : ToastrService = window['toastr'];
let jQuery : Object = window['$'];

const routes: Routes = [
  { path: 'events', component: EventsListComponent , resolve:{events:EventsResolverService} },
  { path: 'events/new', canDeactivate:[ExitCreateNewEventGuard], component:CreateEventComponent },
  { path: 'events/session/new',  component:CreateSessionComponent },
  { path: 'events/:id', canActivate: [ValidEventIdGuard], component:EventDetailsComponent },
  {path:'eventNotFound', component : EventNotFoundComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
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
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide : TOASTR_TOKEN , useValue : toastr},
    {provide : JQUERY_TOKEN, useValue : jQuery}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
