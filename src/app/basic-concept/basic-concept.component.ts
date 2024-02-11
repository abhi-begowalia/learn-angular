import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'app-basic-concept',
  standalone: true,
  imports: [FirstComponent,HostListenerComponent,SelectorComponent],
  templateUrl: './basic-concept.component.html',
  styleUrl: './basic-concept.component.css'
})
export class BasicConceptComponent {

}
