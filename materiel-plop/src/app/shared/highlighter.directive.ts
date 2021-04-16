import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[mpHighlighter]'
})
export class HighlighterDirective {

  @Input() mpHighlighter: string;

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.display = 'inline-block';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.mpHighlighter);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
