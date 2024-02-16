import { Component } from '@angular/core';
import { EventBindingComponent } from './event-binding/event-binding.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [EventBindingComponent],
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

  userData:any;
  // userData:any = {
  //   "name":"Abhisheak",
  //   "age":23
  // }

  isSubmitting:boolean = true;
  isActive:boolean = true;

  pData = "Data for binding";
  imgSrc= "../../assets/img.jpeg";

  ToggleBtn(){
    this.isSubmitting = !this.isSubmitting;
  }

  dStyle = {
    color:'red',
    bg:"blue",
    font:20
  }

  multipleClasses = "colorRed font20";
  eventclass = '';

  toggleClass(){
    this.eventclass == '' ? this.eventclass ="active" : this.eventclass = '';
  }

  isSelected:boolean = true;
}
