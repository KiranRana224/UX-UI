import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuplodDownloadComponent } from './fileuplod-download.component';

describe('FileuplodDownloadComponent', () => {
  let component: FileuplodDownloadComponent;
  let fixture: ComponentFixture<FileuplodDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuplodDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileuplodDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
