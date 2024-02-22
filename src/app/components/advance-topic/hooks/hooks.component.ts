import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hooks',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent {
  routes = [
    { path: 'ng-on-changes', label: 'NgOnChanges' },
    { path: 'ng-on-init', label: 'NgOnInit' },
    { path: 'ng-do-check', label: 'NgDoCheck' },
    { path: 'ng-after-view-init', label: 'NgAfterViewInit' },
    { path: 'ng-after-view-checked', label: 'NgAfterViewChecked' },
    { path: 'ng-after-content-init', label: 'NgAfterContentInit' },
    { path: 'ng-after-content-checked', label: 'NgAfterContentChecked' },
    { path: 'ng-on-destroy', label: 'NgOnDestroy' },
  ];
}
