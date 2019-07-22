import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzeChuanNoodlesComponent } from './sze-chuan-noodles.component';

describe('SzeChuanNoodlesComponent', () => {
  let component: SzeChuanNoodlesComponent;
  let fixture: ComponentFixture<SzeChuanNoodlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzeChuanNoodlesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzeChuanNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
