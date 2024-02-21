import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs:['data']
})
export class ChildComponent {

  private _message$ = new Subject<string>();

	staticAlertClosed = false;

	@ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert | undefined;

  data:any;

  ngOnChanges(){
    alert("Something has be chnaged.");
  }
}
