import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  counter:number = 0;

  IncreaseCounter(){
    this.counter = this.counter + 1;
  }

  decreaseCounter(){
    this.counter = this.counter - 1;
  }
}
