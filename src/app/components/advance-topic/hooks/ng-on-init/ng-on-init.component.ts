import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.css'
})
export class NgOnInitComponent implements OnInit, OnChanges  {

  public changeLog:string[] = [];
  message:string = '';

  ngOnChanges(changes: SimpleChanges): void { // it will call always when values will be changes
    for(const propName in changes){
      const change:SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      this.changeLog.push(
        `ngOnChanges ${propName}: currentValue = ${current}, previousValue = ${previous}, firstChange = ${change.firstChange}`
      );      
    } 
  }

  ngOnInit(): void { // it will call only once
    this.message = "Component Initilized";
    this.changeLog.push('NgOnInit Called.')
  }

  updateValue(){
    this.message = "Component Updated";
    this.changeLog.push('Message Updated through NgOnChange.');
  }

}
