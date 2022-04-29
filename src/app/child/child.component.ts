import { Component, ContentChild, OnInit } from '@angular/core';
import { ChildContentDirective } from '../child-content.directive';


let index:number=1;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  contentId=`project_content_${index++}`;
  expanded:boolean=false;
  @ContentChild(ChildContentDirective) content!: ChildContentDirective;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClick(){
    
    this.expanded= !this.expanded;
  }

}
