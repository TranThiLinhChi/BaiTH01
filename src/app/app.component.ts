import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Bai1/2';
  ngOnInit() {
    // tinh tong 
    let n = 10;
    let s = 0;
    for (let i = 1; i <= 10; i++) {
      s += 1.0 / i;
    }
    console.log(s);

    // kiem tra so nguyen to
    var list: number[];
    list = [4, 11, 45, 3, 13, 9, 50, 7, 60, 77];
    var checkNT = (n: number) => {
      let ok = true;
      for (let i = 2; i < n; ++i) {
        if (n % i == 0) {
          ok = false;
          break;
        }
      }
      return ok;
    }
    let listNT = list.filter(x => checkNT(x));
    console.log("Cac so nguyen to la: " + listNT);
  }
}   
