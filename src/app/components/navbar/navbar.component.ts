import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public route: ActivatedRoute) {}
  links = [
    { title: 'Home', fragment: 'home' },
    { title: 'Basic Concept', fragment: 'basic-concept' },
    { title: 'Advance Topic', fragment: 'advance-topic' },
  ];
}
