import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  outputs: ['childData']
})
export class ChildComponent {

  childData = new EventEmitter();
  
  getHobbies(val:any){
    this.childData.emit(val);
  }
}
