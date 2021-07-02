import { Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private elment: ElementRef) {
   }

   @Input('appClass') set classNames( obj: any) {
    for(let key in obj){
      if(obj[key]) { 
        this.elment.nativeElement.classList.add(key)
      }else{
        this.elment.nativeElement.classList.remove(key)
      }
    }
   }
}
