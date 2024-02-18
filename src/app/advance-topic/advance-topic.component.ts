import { Component, ViewEncapsulation } from '@angular/core';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-advance-topic',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './advance-topic.component.html',
  styleUrl: './advance-topic.component.css'
})
export class AdvanceTopicComponent {

}
