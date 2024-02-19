import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdvanceTopicComponent } from './components/advance-topic/advance-topic.component';
import { BasicConceptComponent } from './components/basic-concept/basic-concept.component';
import { PipesComponent } from './components/basic-concept/pipes/pipes.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BasicConceptComponent,PipesComponent,AdvanceTopicComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';
}
