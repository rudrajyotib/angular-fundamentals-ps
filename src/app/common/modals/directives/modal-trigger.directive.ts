import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from '../../jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {


  private htmlElement : HTMLElement;
  @Input('modal-trigger') modalId : string;

  constructor(
    elementRef : ElementRef,
    @Inject(JQUERY_TOKEN) private jqeury : any) { 
      this.htmlElement = elementRef.nativeElement;
    }

  
  ngOnInit(){
    this.htmlElement.addEventListener('click', e=> {
      this.jqeury('#'+this.modalId).modal({});
    });
  }




}
