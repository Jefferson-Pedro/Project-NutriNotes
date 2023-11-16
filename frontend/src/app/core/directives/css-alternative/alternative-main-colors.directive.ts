import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[alternativeMainColors]'
})
export class AlternativeMainColorsDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor  = '#F9AA33';
    el.nativeElement.style.color = '#232F34';
  }
}

//https://m2.material.io/design/color/applying-color-to-ui.html#top-and-bottom-app-bars