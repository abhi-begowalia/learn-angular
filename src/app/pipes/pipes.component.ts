import { Component } from '@angular/core';
import { BuiltInComponent } from './built-in/built-in.component';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [BuiltInComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

}
