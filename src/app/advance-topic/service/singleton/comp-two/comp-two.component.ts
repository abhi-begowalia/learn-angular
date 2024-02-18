import { Component } from '@angular/core';
import { SingletonService } from '../../../../services/singleton/singleton.service';

@Component({
  selector: 'app-comp-two',
  standalone: true,
  imports: [],
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css'
})
export class CompTwoComponent {
  dataList:any;

  constructor(private singletonService:SingletonService){
    this.getItems();
  }

  addNumber(val:any){
    if(val != null){
      this.singletonService.addNumber(val);   
      this.getItems();
    }
  }

  getItems(){
    this.dataList = this.singletonService.getList();
  }
}
