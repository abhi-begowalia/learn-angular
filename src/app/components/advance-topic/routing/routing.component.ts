import { Component } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  constructor(public route: ActivatedRoute) {}
  isActive(path: string): boolean {
    return this.route.snapshot.url[0]?.path === path;
  }

  routes = [
    { path: 'basic', label: 'Basic Routing' },
    { path: 'dynamic', label: 'Dynamic Routing' },
    { path: 'auxiliary', label: 'Auxiliary Routing' },
  ];
}
