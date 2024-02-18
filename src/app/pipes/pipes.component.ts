import { Component } from '@angular/core';
import { BuiltInComponent } from './built-in/built-in.component';
import { CustomComponent } from './custom/custom.component';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [BuiltInComponent,CustomComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

}
