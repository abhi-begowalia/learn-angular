import { Component } from '@angular/core';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [StructuralComponent,AttributeComponent],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

}
