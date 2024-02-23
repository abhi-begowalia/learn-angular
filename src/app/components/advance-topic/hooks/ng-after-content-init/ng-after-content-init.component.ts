import { Component } from '@angular/core';
import { FileInputComponent } from './file-input/file-input.component';

@Component({
  selector: 'app-ng-after-content-init',
  standalone: true,
  imports: [FileInputComponent],
  templateUrl: './ng-after-content-init.component.html',
  styleUrl: './ng-after-content-init.component.css'
})
export class NgAfterContentInitComponent {

}
