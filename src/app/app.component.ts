import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './basic-concept/first/first.component';
import { HostListenerComponent } from './basic-concept/host-listener/host-listener.component';
import { BasicConceptComponent } from './basic-concept/basic-concept.component';
import { PipesComponent } from './pipes/pipes.component';
import { AdvanceTopicComponent } from './advance-topic/advance-topic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BasicConceptComponent,PipesComponent,AdvanceTopicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';
}
