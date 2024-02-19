import { Component } from '@angular/core';
import { LoopsComponent } from './loops/loops.component';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [LoopsComponent],
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
