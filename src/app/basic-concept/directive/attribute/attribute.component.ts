import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  dStyle:any = {
    'bg':"skyblue",
    'color':'red',
    'fontSize':14
  }

  UpdateDStyle(ele:any,val:any){
    this.dStyle[ele]= val.value;
  }

  activeNavItem: any;
  navItems = ['Home', 'About', 'Service', 'Contact'];

  activateNavItem(navItemRef: any): void {
    // Remove 'active' class from the previously active item
    if (this.activeNavItem) {
      this.activeNavItem.classList.remove('active');
    }

    // Add 'active' class to the clicked item
    this.activeNavItem = navItemRef;
    this.activeNavItem.classList.add('active');
  }
}
