import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  items:number[]=[]
  constructor() { }


  ngOnInit(): void {
  this.items=new Array(2).fill(1).map((i)=>i+1);
  }

}
