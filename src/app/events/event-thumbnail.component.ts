import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../dataObjects/event-data-objects';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() eventData : Event

  constructor() { }

  ngOnInit(): void {
  }

  
}
