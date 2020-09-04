import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css']
})
export class B2Component implements OnInit {

  constructor() { }
  title="Bài 2: Tính S(x, n) = – x + x^2/2! – x^3/3! + … + (-1)^n * x^n/n!";
  x:number;
  n:number;
  S=1;
    ngOnInit(): void {
      this.x=10;
      this.n=11;
      for(let i=1;i<=(this.n);i++){
        this.S+=Math.pow(-1,(i))
      }
    }
}
