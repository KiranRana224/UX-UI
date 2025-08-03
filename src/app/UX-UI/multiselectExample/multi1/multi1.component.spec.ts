import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multi1Component } from './multi1.component';

describe('Multi1Component', () => {
  let component: Multi1Component;
  let fixture: ComponentFixture<Multi1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multi1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
