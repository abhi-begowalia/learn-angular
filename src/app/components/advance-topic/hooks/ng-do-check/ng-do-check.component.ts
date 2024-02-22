import { Component, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css'
})
export class NgDoCheckComponent implements OnChanges, DoCheck {
  
  public changeLog:string[] = [];
  user = {
    id:1,
    name:"abhisheak",
    email:"abhi@gmail.com"
  }

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

  ngDoCheck(): void {
   
  }
}
