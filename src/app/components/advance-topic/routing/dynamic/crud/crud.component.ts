import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  dummyData = [
    { id: 1, name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com', salary: 50000.00 },
    { id: 2, name: 'Jane Smith', phoneNumber: '9876543210', email: 'jane@example.com', salary: 60000.50 },
    { id: 3, name: 'Bob Johnson', phoneNumber: '5551234567', email: 'bob@example.com', salary: 75000.75 },
    { id: 4, name: 'Alice Brown', phoneNumber: '4449876543', email: 'alice@example.com', salary: 80000.25 },
    { id: 5, name: 'Charlie Davis', phoneNumber: '9995551234', email: 'charlie@example.com', salary: 70000.80 }
  ];
  
}
