import { Component } from '@angular/core';
import { PrefixPostfixPipe } from '../../../../custom-pipes/prefix-postfix.pipe';


@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [PrefixPostfixPipe],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {

}
