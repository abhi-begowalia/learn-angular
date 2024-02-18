import { Injectable } from '@angular/core';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class MultipleService {
  list:number[] = [];
  constructor() { }

  addNumber(num:number){
    this.list.push(num);
  }

  getList(){
    return this.list;
  }
}
