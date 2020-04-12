import { Component } from '@angular/core';


@Component(
    {
        selector:'events-list',
        templateUrl:'./events-list.component.html'
    }
)
export class EventsListComponent
{
    event = {
        id:1,
        name : 'Angular Connect',
        date : '20/12/2020',
        time : '10:00',
        price : 599,
        imageUrl : '/assets/images/angularconnect-shield.png',
        location :{
            address : 'Radisson Blue',
            city : 'Bangalore',
            country : 'India'
        }

    }
}