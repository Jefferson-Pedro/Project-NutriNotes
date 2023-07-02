import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mainColors]'
})
export class CssDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor  = '#004746'
    el.nativeElement.style.color = '#FFC745';
  }
}
