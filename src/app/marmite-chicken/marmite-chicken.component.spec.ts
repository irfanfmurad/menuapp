import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmiteChickenComponent } from './marmite-chicken.component';

describe('MarmiteChickenComponent', () => {
  let component: MarmiteChickenComponent;
  let fixture: ComponentFixture<MarmiteChickenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarmiteChickenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmiteChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
