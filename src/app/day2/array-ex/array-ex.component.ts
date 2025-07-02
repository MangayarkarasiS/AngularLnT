import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-array-ex',
  imports: [NgForOf],
  templateUrl: './array-ex.component.html',
  styleUrl: './array-ex.component.css'
})
export class ArrayExComponent {
  
  allColors:string[]=['White','Brown','Black'];

  removeColor(color:string){
    this.allColors.splice(this.allColors.indexOf(color),1);
  }
}
