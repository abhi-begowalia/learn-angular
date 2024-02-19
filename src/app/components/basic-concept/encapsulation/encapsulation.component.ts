import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class EncapsulationComponent {

}
