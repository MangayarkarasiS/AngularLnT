import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input() name:string="";
 @Output() messageEvent=new EventEmitter<string>();

 message:string='';

 sendMessage(){
   this.messageEvent.emit(this.message);
   this.message='';
 }
}
