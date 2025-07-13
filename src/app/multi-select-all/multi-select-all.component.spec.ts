import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectAllComponent } from './multi-select-all.component';

describe('MultiSelectAllComponent', () => {
  let component: MultiSelectAllComponent;
  let fixture: ComponentFixture<MultiSelectAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
