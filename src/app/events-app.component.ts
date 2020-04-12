import { Component } from '@angular/core';

@Component({
  selector: 'event-root',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'angular-fundamentals-pluralSight';
}
