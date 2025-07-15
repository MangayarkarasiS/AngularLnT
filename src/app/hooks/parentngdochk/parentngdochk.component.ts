import { Component } from '@angular/core';
import { UserProfileNgDoChkComponent } from '../user-profile-ng-do-chk/user-profile-ng-do-chk.component';

@Component({
  selector: 'app-parentngdochk',
  imports: [UserProfileNgDoChkComponent],
  template: `<button (click)="counter.value = counter.value + 1">Increment</button>
<app-user-profile-ng-do-chk [counter]="counter"></app-user-profile-ng-do-chk>` ,
  styleUrl: './parentngdochk.component.css'
})
export class ParentngdochkComponent {
 counter = { value: 0 };
}
