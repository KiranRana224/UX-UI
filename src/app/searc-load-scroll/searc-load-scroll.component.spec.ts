import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcLoadScrollComponent } from './searc-load-scroll.component';

describe('SearcLoadScrollComponent', () => {
  let component: SearcLoadScrollComponent;
  let fixture: ComponentFixture<SearcLoadScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcLoadScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcLoadScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
