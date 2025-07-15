import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-ng-do-chk',
  imports: [],
  template:  `
    <h3>Counter</h3>
    <p>Value: {{ counter.value }}</p>
    <p *ngIf="log.length">Change Log:</p>
    <ul>
      <li *ngFor="let entry of log">{{ entry }}</li>
    </ul>
  `,
  styleUrl: './user-profile-ng-do-chk.component.css'
})

export class UserProfileNgDoChkComponent {
   @Input() counter = { value: 0 };
  private previousValue = 0;
  log: string[] = [];

  ngDoCheck(): void {
    if (this.counter.value !== this.previousValue) {
      this.log.push(`Counter changed from ${this.previousValue} to ${this.counter.value}`);
      this.previousValue = this.counter.value;
    }
  }
}

