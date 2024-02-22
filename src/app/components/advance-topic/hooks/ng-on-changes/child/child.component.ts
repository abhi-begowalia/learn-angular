import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs:['data']
})
export class ChildComponent implements OnChanges {
  @Input() data!:string;
  showAlert = false;

  public changeLog:string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    
    for(const propName in changes){
      const change:SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      this.changeLog.push(
        `ngOnChanges ${propName}: currentValue = ${current}, previousValue = ${previous}, firstChange = ${change.firstChange}`
      );      
    }

    // below is example of based on the condition it will not display the alert on first time
    if(!changes['data'].firstChange){
      this.showAlert = true;
      setTimeout(() => {
            this.showAlert = false;
      }, 5000);
    }
  }

}