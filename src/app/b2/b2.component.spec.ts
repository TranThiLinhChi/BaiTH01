import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Component } from './b2.component';

describe('B2Component', () => {
  let component: B2Component;
  let fixture: ComponentFixture<B2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
