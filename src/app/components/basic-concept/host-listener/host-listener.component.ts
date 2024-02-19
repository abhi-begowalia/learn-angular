import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  standalone: true,
  imports: [],
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.css'
})
export class HostListenerComponent {
  @HostListener('click', ['$event'])
  onHostClick(event: Event): void {
    // This method will be called when the host element (in this case, the button) is clicked
    alert('Host Listener event called!');
  }

  onButtonClick(): void {
    // This method will be called when the button is clicked
    alert('Button clicked!');
  }
}
