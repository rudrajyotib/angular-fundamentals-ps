import { Injectable } from '@angular/core';

declare let toastr

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { 
   
  }

  success(message:string, title:string)
  {
    toastr.success(message, title);
  }

  error(message:string, title: string)
  {
    toastr.error(message, title);
  }

}
