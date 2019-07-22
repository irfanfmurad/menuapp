import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamHeongChickenComponent } from './kam-heong-chicken.component';

describe('KamHeongChickenComponent', () => {
  let component: KamHeongChickenComponent;
  let fixture: ComponentFixture<KamHeongChickenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamHeongChickenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamHeongChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
