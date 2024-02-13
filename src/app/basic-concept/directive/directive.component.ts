import { Component } from '@angular/core';
import { StructuralComponent } from './structural/structural.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [StructuralComponent],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

}
