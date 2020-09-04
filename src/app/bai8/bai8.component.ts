import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.css']
})
export class Bai8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
export class Tamgiac {
  protected a: number;
  protected b: number;
  protected c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  DienTich(): number {
    let p = (1 / 2) * (this.a + this.b + this.c);
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}
export class Chop extends Tamgiac {
  protected h: number;
  constructor(a: number, b: number, c: number, h: number) {
    super(a, b, c);
    this.h = h;
  }
  Thetichchop(): number {
    return this.DienTich() * this.h;
  }
}

export class HCN {
  protected a: number;
  protected b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public DienTich(): number {
    return this.a + this.b;
  }
}

