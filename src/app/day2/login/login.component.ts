import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-login',
  imports: [ProductComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   username:string='Kathi';

   childMessage:string='';

   recieveMessage(message:string){
     this.childMessage=message;
   }

}
