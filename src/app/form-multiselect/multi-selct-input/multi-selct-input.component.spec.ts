import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelctInputComponent } from './multi-selct-input.component';

describe('MultiSelctInputComponent', () => {
  let component: MultiSelctInputComponent;
  let fixture: ComponentFixture<MultiSelctInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelctInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelctInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
