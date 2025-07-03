import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactform.component.html',
  styleUrl: './reactform.component.css'
})
export class ReactformComponent {
 userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
