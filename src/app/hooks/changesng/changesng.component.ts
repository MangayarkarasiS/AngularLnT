import { Component } from '@angular/core';
import { ChangeschildComponent } from '../changeschild/changeschild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-changesng',
  imports: [ChangeschildComponent, FormsModule],
  template: `
    <input [(ngModel)]="userName" placeholder="Enter name" />
    
    <app-changeschild [name]="userName"></app-changeschild>
    `,
  styleUrl: './changesng.component.css'
})
export class ChangesngComponent {
 userName="Alice";
 

  ngOnInit(): void {
    console.log('ChangesngComponent initialized with name:', this.userName);
  }
}
