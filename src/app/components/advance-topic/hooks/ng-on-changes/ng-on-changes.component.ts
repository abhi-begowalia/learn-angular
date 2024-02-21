import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-ng-on-changes',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './ng-on-changes.component.html',
  styleUrl: './ng-on-changes.component.css'
})
export class NgOnChangesComponent {
  message:string = "Hello, This is default message.";

  ChangeData(val:string){
    this.message = val;
  }
}
