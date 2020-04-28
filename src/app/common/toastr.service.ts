import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<ToastrService>('toastr');

export interface ToastrService {
  success(message:string, title?:string);
  error(message:string, title: string);
}
