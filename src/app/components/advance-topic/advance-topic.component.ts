import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance-topic',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './advance-topic.component.html',
  styleUrl: './advance-topic.component.css'
})
export class AdvanceTopicComponent {

  constructor(public route: ActivatedRoute) {}
  isActive(path: string): boolean {
    return this.route.snapshot.url[0]?.path === path;
  }

  routes = [
    { path: 'services', label: 'Service' },
    { path: 'routing', label: 'Angular Routing' },
    { path: 'hooks', label: 'Lifecycle Hooks' },
  ];
}
