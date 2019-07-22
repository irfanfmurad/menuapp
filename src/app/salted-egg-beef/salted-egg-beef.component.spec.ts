import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltedEggBeefComponent } from './salted-egg-beef.component';

describe('SaltedEggBeefComponent', () => {
  let component: SaltedEggBeefComponent;
  let fixture: ComponentFixture<SaltedEggBeefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltedEggBeefComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltedEggBeefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
