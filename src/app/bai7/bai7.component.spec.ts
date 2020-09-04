import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai7Component } from './bai7.component';

describe('Bai7Component', () => {
  let component: Bai7Component;
  let fixture: ComponentFixture<Bai7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
