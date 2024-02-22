import { Component, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css'
})
export class NgDoCheckComponent {
  
  user = {
    id:1,
    name:"abhisheak",
    email:"abhi@gmail.com"
  }

  setName(name:string){
    this.user.name = name;
  }
}
