import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextWithForbiddenWordsHighlighter]'
})
export class TextWithForbiddenWordsHighlighterDirective implements OnChanges {

  @Input() forbiddenWords: Array<string>;
  @Input("appTextWithForbiddenWordsHighlighter") textToCheck: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(): void {
    const textSplitted = this.textToCheck.split(/[ ,.;!?]+/);
    this.forbiddenWords.forEach(wordToFind => {
      textSplitted.forEach(word => {
          if (word == wordToFind){
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
          }
      })
    });
  }
}
