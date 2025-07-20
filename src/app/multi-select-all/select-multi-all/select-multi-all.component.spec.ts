import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultiAllComponent } from './select-multi-all.component';

describe('SelectMultiAllComponent', () => {
  let component: SelectMultiAllComponent;
  let fixture: ComponentFixture<SelectMultiAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMultiAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMultiAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
