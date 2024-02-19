import { Component } from '@angular/core';
import { SingletonService } from '../../../../../services/singleton/singleton.service';


@Component({
  selector: 'app-comp-one',
  standalone: true,
  imports: [],
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css'
})
export class CompOneComponent {
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
