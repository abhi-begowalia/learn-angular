import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs: ['Userdata']
})
export class ChildComponent {
  Userdata:any;
}
