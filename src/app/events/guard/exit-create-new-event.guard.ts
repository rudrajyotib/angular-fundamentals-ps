import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventComponent } from '../create/create-event.component';

@Injectable({
  providedIn: 'root'
})
export class ExitCreateNewEventGuard implements CanDeactivate<CreateEventComponent> {
  canDeactivate(
    component: CreateEventComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty)
    {
      return window.confirm('Do you want to leave this page');
    }
    return true;
  }
  
}
