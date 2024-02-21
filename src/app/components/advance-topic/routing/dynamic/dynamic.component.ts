import { Component } from '@angular/core';
import { CrudComponent } from './crud/crud.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CrudComponent],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

}
