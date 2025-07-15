import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changeschild',
  imports: [],
  template:  `<p>Current name: {{ name }}</p>`,
  styleUrl: './changeschild.component.css'
})
export class ChangeschildComponent {
 @Input() name: string = '';

   ngOnInit(): void {
    console.log('ChangeschildComponent initialized.');
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      const prev = changes['name'].previousValue;
      const curr = changes['name'].currentValue;
      console.log(`Name changed from ${prev} to ${curr}`);
    }
}
}
