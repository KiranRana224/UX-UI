import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogParentComponent } from './dialog-parent.component';

describe('DialogParentComponent', () => {
  let component: DialogParentComponent;
  let fixture: ComponentFixture<DialogParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
