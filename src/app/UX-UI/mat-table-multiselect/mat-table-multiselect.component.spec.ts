import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableMultiselectComponent } from './mat-table-multiselect.component';

describe('MatTableMultiselectComponent', () => {
  let component: MatTableMultiselectComponent;
  let fixture: ComponentFixture<MatTableMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableMultiselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
