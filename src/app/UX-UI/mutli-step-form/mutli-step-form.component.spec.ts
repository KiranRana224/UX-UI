import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliStepFormComponent } from './mutli-step-form.component';

describe('MutliStepFormComponent', () => {
  let component: MutliStepFormComponent;
  let fixture: ComponentFixture<MutliStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutliStepFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutliStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
