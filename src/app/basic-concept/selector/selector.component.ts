import { Component } from '@angular/core';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';

@Component({ // This is element based selector
  selector: 'app-selector',
  standalone: true,
  imports: [AttributeSelectorComponent,ClassSelectorComponent],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

}
