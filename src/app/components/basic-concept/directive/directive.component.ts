import { Component } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  constructor(public route: ActivatedRoute) {}
  isActive(path: string): boolean {
    return this.route.snapshot.url[0]?.path === path;
  }

  routes = [
    { path: 'structural-directive', label: 'Sturctural Directive' },
    { path: 'attribute-directive', label: 'Attribute Directive' },
  ];
}
