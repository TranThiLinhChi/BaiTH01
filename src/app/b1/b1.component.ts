import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css']
})
export class B1Component implements OnInit {

  x: number;
  n: number;
  s = 0;

  constructor() { }

  ngOnInit(): void {
  }

  bai1() {
    this.s = 0;
    let lt = 1;
    for (let i = 1; i <= this.n; i++) {
      lt *= this.x;
      this.s += lt;
    }
  }

}
