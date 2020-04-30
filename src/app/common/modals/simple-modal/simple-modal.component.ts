import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from '../../jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title : string;
  @Input() elementId : string;
  @ViewChild('simpleModalDialog') elementRef : ElementRef

  constructor(@Inject(JQUERY_TOKEN) private jquery : any) { }

  ngOnInit(): void {
  }

  closeDialog()
  {
    this.jquery(this.elementRef.nativeElement).modal('hide');
  }

}
