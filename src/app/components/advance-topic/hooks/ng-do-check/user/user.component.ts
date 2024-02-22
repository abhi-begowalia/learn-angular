import { Component, Input, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

function generateRandomUsername(name: string): string {
  // Generate a random number or text to append to the name
  const randomSuffix = Math.floor(Math.random() * 1000); // Example: Random number between 0 and 1000
  // Combine the name and random suffix to create the username
  const username = `${name}_${randomSuffix}`;
  return username;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  inputs:['user']
})
export class UserComponent implements OnChanges, DoCheck {
  @Input() user!:any;
  username!:string;

  public changeLog:string[] = [];

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
   this.username = generateRandomUsername(this.user.name);
  }

  
}
