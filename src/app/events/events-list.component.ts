import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component(
    {
        selector:'events-list',
        templateUrl:'./events-list.component.html'
    }
)
export class EventsListComponent implements OnInit
{

    events : any[];

    constructor(private eventService : EventService,
        private toastrService : ToastrService,
        private route : ActivatedRoute)
    {
        this.events = [];
    }
    
    ngOnInit()
    {
        // this.eventService.getEvents().subscribe(events => {
        //     events.forEach(element => {
        //         this.events.push(element);
        //     });
        // });
        this.events = this.route.snapshot.data['events'];
    }
    
    handleThumbnailClick(eventId : string, eventName:string)
    {
        console.log('entering event '+eventId);
        this.toastrService.success(eventName,'Entering event');
    }
    
}