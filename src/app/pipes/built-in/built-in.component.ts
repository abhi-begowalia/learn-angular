import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe,JsonPipe,PercentPipe,DecimalPipe,AsyncPipe,CurrencyPipe,SlicePipe],
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'
})
export class BuiltInComponent {
  title = "Example of Pipes";
  jsonData = {
    "name":"abhi",
    "age":24
  }
}
