import { Component } from '@angular/core';
import { MultipleService } from '../../../../../services/multiple/multiple.service';

@Component({
  selector: 'app-comp-one-mul',
  standalone: true,
  imports: [],
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css',
  providers:[MultipleService]
})
export class CompOneComponent {
  dataList:any;

  constructor(private multipleService:MultipleService){
    this.getItems();
  }

  addNumber(val:any){
    if(val != null){
      this.multipleService.addNumber(val);   
      this.getItems();
    }
  }

  getItems(){
    this.dataList = this.multipleService.getList();
  }
}
