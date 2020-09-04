import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';
import { B4Component } from './b4/b4.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai8Component } from './bai8/bai8.component';



@NgModule({
  declarations: [
    AppComponent,
    B1Component,
    B2Component,
    B3Component,
    B4Component,
    Bai5Component,
    Bai8Component,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
