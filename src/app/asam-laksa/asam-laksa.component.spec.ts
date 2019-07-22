import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsamLaksaComponent } from './asam-laksa.component';

describe('AsamLaksaComponent', () => {
  let component: AsamLaksaComponent;
  let fixture: ComponentFixture<AsamLaksaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsamLaksaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsamLaksaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
