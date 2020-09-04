import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai8Component } from './bai8.component';

describe('Bai8Component', () => {
  let component: Bai8Component;
  let fixture: ComponentFixture<Bai8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
