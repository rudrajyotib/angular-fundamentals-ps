import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ValidEventIdGuard implements CanActivate {

  constructor(private eventService : EventService, 
    private routerService : Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let id = Number(next.paramMap.get('id'));
    if (id === NaN)
    {
      this.routerService.navigate(['/eventNotFound']);
      return false;
    }
    let eventIndex : number = this.eventService.getEvents().findIndex(event => event.id === id)
      if (eventIndex === -1)
      {
        this.routerService.navigate(['/eventNotFound']);
        return false;
      }
      return true;
  }
  
}
