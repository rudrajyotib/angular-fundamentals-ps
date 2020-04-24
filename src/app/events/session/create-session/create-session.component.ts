import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Session } from 'src/app/dataObjects/event-data-objects';
import { restrictedWords } from 'src/app/shared/validators';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  presenter : FormControl;
  duration : FormControl;
  level : FormControl;
  abstract : FormControl;

  @Output() saveSessionEvent = new EventEmitter();

  newSessionForm : FormGroup;

  constructor() { }

  

  ngOnInit(): void {
    this.name=new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(300),
    restrictedWords(['Who','who'])]);

    this.newSessionForm = new FormGroup(
      {
        name : this.name,
        presenter : this.presenter,
        duration : this.duration,
        level : this.level,
        abstract : this.abstract
      }
    )
  }

  saveSession(formValues)
  {
    let session : Session = 
    {
      id: undefined,
      name:formValues.name,
      presenter : formValues.presenter,
      duration : +formValues.duration,
      level : formValues.level,
      abstract : formValues.abstract,
      voters : []      
    };
    console.log(formValues);
    this.saveSessionEvent.emit(session);
  }

  cancelCreateSession()
  {
    this.saveSessionEvent.emit(null);
  }

}
