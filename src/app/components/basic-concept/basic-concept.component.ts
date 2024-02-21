import { Component } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic-concept',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './basic-concept.component.html',
  styleUrl: './basic-concept.component.css'
})
export class BasicConceptComponent {
  constructor(public route: ActivatedRoute) {}
  isActive(path: string): boolean {
    return this.route.snapshot.url[0]?.path === path;
  }

  routes = [
    { path: 'host-listener', label: 'Host Listener' },
    { path: 'selector', label: 'Selector' },
    { path: 'pre-white-spa', label: 'Pre White Space' },
    { path: 'view-provider', label: 'View Provider' },
    { path: 'encapsulation', label: 'Encapsulation' },
    { path: 'parent-to-child', label: 'Parent to Child' },
    { path: 'child-to-parent', label: 'Child to Parent' },
    { path: 'directive', label: 'Directive' },
    { path: 'data-binding', label: 'Data Binding' },
    { path: 'two-way-data-binding', label: 'Two way Binding' },
    { path: 'pipes', label: 'Pipes' }
  ];
}
