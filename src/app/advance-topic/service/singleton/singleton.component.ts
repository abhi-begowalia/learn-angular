import { Component, ViewEncapsulation } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@Component({
  selector: 'app-singleton',
  standalone: true,
  imports: [CompOneComponent,CompTwoComponent],
  templateUrl: './singleton.component.html',
  styleUrl: './singleton.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class SingletonComponent {

}
