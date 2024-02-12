import { Component } from '@angular/core';


class ProviderTest{
  onProviderCall(): void {
    // This method will be called when the button is clicked
    alert('Provider class function called.');
  }
}

@Component({
  selector: 'app-view-provider',
  standalone: true,
  imports: [],
  templateUrl: './view-provider.component.html',
  styleUrl: './view-provider.component.css',
  viewProviders: [ProviderTest]
})
export class ViewProviderComponent {
  constructor(private _pro:ProviderTest){}

  // this is arrow function and I have called another fuction which is able in another class 
  onProviderButtonClick = ():void => this._pro.onProviderCall();
}


