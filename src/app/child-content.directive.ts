import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appChildContent]'
})
export class ChildContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}

