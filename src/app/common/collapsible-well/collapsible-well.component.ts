import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  collapsed : boolean = true;

  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse()
  {
    this.collapsed = !this.collapsed;
  }

}
