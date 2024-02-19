import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  myForm: FormGroup;
  userData = {
    name: '',
    email: '',
    age: 0,
    phone: '',
    city: ''
  };

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      phone: ['', Validators.required],
      city: ['', Validators.required]
    });

    // Update userData object on form changes
    this.myForm.valueChanges.subscribe(value => {
      this.userData = value;
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      alert('Form submitted:{{this.userData}}');
      // TODO: Process form data
    } else {
      alert('Form is invalid');
    }
  }

  onClick(){
    alert(' click event is target.');
  }
}
