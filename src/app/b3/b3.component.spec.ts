import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B3Component } from './b3.component';

describe('B3Component', () => {
  let component: B3Component;
  let fixture: ComponentFixture<B3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
