import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  standalone:true,
  imports: [FormsModule,NgIf],
  templateUrl: './temp-form.component.html',
  styleUrl: './temp-form.component.css'
})
export class TempFormComponent {
 model={username:'',email:''};

 onSubmit(userForm:NgForm){
  console.log(userForm);
 }
}
