import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective implements OnInit {

  @Input('appChangeBackgroundColor') index: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(): void {
    if (this.index % 2 === 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'rgb(191, 220, 230)');
    }
  }

}
