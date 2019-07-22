import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaghettiComponent } from './spaghetti.component';

describe('SpaghettiComponent', () => {
  let component: SpaghettiComponent;
  let fixture: ComponentFixture<SpaghettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaghettiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaghettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
