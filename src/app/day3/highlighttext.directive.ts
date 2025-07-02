import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighttext]'
})
export class HighlighttextDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('dblclick')
  onDoubleClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

   @HostListener('contextmenu')
  onRightClick(event: MouseEvent) {
    event.preventDefault(); // prevent context menu    
  }
}
