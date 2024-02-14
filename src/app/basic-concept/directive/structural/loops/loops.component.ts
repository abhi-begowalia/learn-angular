import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  standalone: true,
  imports: [],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css'
})
export class LoopsComponent {
  // dummyData:any;
  dummyData:any = [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "version": 6.1
    },
    {
      "name": "Abla Dilmurat",
      "language": "Uyghur",
      "id": "5ZVOEPMJUI4MB4EN",
      "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
      "version": 2.53
    },
    {
      "name": "Afonso Vilarchán",
      "language": "Galician",
      "id": "JMCL0CXNXHPL1GBC",
      "bio": "Fusce eu ultrices elit, vel posuere neque. Morbi ac tellus erat. Nunc tincidunt laoreet laoreet.",
      "version": 5.21
    },
    {
      "name": "Mark Schembri",
      "language": "Maltese",
      "id": "KU4T500C830697CW",
      "bio": "Nam laoreet, nunc non suscipit interdum, justo turpis vestibulum massa, non vulputate ex urna at purus. Morbi ultricies consequat ligula posuere eleifend. Vivamus id faucibus velit, id posuere leo. Sed laoreet posuere sapien, ut feugiat nibh gravida at. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
      "version": 3.17
    },
    {
      "name": "Antía Sixirei",
      "language": "Galician",
      "id": "XOF91ZR7MHV1TXRS",
      "bio": "Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Morbi finibus dui sed est fringilla ornare. Duis pellentesque ultrices convallis. Morbi ultricies consequat ligula posuere eleifend.",
      "version": 6.44
    }];
}
