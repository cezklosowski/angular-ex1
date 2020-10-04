import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective implements OnChanges {

  @Input('appChangeBackgroundColor') index: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(): void {
    if (this.index % 2 === 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'rgb(213, 233, 240)');
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'background-color');
    }
  }

}
