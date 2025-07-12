import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from '../UserCredential.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-loginform',
  imports: [FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  allUsers:UserCredentials={
     UserName :'',
     Password:'',
     Role: ''
};
  errormessage:string='';
  constructor(private userService:UserService,
               private router:Router,
               private authService:AuthService) { }
 errorMessage = '';
  ngOnInit(): void {
  }
  login(myForm:any){
     this.errorMessage = '';
    //i need to take data from myform and store it in variable
    let loginUser: UserCredentials={
      UserName :myForm.value.uname,
      Password:myForm.value.uPassword,
      Role: myForm.value.role
      
    }
    console.log(myForm);
    console.log("loginuser.username "+loginUser.UserName  );
    if (myForm.invalid) {
      return;
    }
    if (!loginUser.UserName || !loginUser.Password || !loginUser.Role) {
      this.errorMessage = 'All fields are required.';
      return;
    }
    if (loginUser.Password.length < 4) {
      this.errorMessage = 'Password must be at least 4 characters.';
      return;
    }
    if (loginUser.Role === 'Admin') {
      this.authService.login('Admin');
     // this.router.navigate(['/product']);
    } else if (loginUser.Role === 'User') {
      this.authService.login('User');
     // this.router.navigate(['/listStud']);
    } else {
      this.errorMessage = 'Invalid role';
    }
    //i will go to service and take the data from service, 
    //then we will verify the data 
    //with data stored in variable, if success goto student list page or show an error
     this.userService.authenticateUser(loginUser).subscribe({
      next:response=>{
        console.log('JWT received:', response.token);
        localStorage.setItem('authToken', response.token);
        //const token = localStorage.getItem('authToken');
        this.router.navigate(['RForm']);
     },
  error: err => {
    alert('Login failed:');
    
  }
        });
      }
    }
