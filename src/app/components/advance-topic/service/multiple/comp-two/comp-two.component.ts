import { Component } from '@angular/core';
import { MultipleService } from '../../../../../services/multiple/multiple.service';

@Component({
  selector: 'app-comp-two-mul',
  standalone: true,
  imports: [],
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css',
  providers:[MultipleService]
})
export class CompTwoComponent {
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
