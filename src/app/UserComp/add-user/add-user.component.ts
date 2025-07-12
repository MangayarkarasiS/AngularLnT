import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserCredentials } from '../../studentcomp/UserCredential.model';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userService=inject(UserService);
  router=inject(Router);
  
 addUser(myForm:any){
   console.log(myForm.value);
      let newUser:UserCredentials={
         UserName:myForm.value.userName,
         Password:myForm.value.password,
         Role:myForm.value.role
      }
      this.userService.addUser(newUser).subscribe({
        next:(response)=>{console.log("added user");
      console.log(response)},
      error:(err)=>{console.log(err)}
      })
    }
 }

