import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { SelectorComponent } from './selector/selector.component';
import { PreWhiteSpaComponent } from './pre-white-spa/pre-white-spa.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { DirectiveComponent } from './directive/directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-basic-concept',
  standalone: true,
  imports: [FirstComponent,HostListenerComponent,SelectorComponent,PreWhiteSpaComponent,ViewProviderComponent,EncapsulationComponent,ParentToChildComponent,ChildToParentComponent,DirectiveComponent,DataBindingComponent],
  templateUrl: './basic-concept.component.html',
  styleUrl: './basic-concept.component.css'
})
export class BasicConceptComponent {

}
