import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { SelectorComponent } from './selector/selector.component';
import { PreWhiteSpaComponent } from './pre-white-spa/pre-white-spa.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';

@Component({
  selector: 'app-basic-concept',
  standalone: true,
  imports: [FirstComponent,HostListenerComponent,SelectorComponent,PreWhiteSpaComponent,ViewProviderComponent,EncapsulationComponent],
  templateUrl: './basic-concept.component.html',
  styleUrl: './basic-concept.component.css'
})
export class BasicConceptComponent {

}
