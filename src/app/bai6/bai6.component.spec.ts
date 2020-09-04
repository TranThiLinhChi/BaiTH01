import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai6Component } from './bai6.component';

describe('Bai6Component', () => {
  let component: Bai6Component;
  let fixture: ComponentFixture<Bai6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
