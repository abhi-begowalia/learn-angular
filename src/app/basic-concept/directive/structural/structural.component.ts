import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css',
  preserveWhitespaces:true
})
export class StructuralComponent {
  isUserLogged:boolean = true;

  login(){
    this.isUserLogged = true;
  }

  logout(){
    this.isUserLogged = false;
  }
}
