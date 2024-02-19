import { Component } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@Component({
  selector: 'app-multiple',
  standalone: true,
  imports: [CompOneComponent,CompTwoComponent],
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.css'
})
export class MultipleComponent {

}
