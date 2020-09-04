import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {

  constructor() { }
  dayso=[1,2,3,4,5,6,7,8,9,10,11,12];
  kq=" ";
  ngOnInit(): void {
    for(let i=0;i<this.dayso.length;i++){
    let x=Math.trunc(Math.sqrt(this.dayso[i]));
    if(Math.pow(x,2)==this.dayso[i]){
      this.kq=this.kq+this.dayso[i]+" ";
    }
  }
}
}


