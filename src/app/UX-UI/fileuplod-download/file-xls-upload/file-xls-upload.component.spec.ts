import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileXlsUploadComponent } from './file-xls-upload.component';

describe('FileXlsUploadComponent', () => {
  let component: FileXlsUploadComponent;
  let fixture: ComponentFixture<FileXlsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileXlsUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileXlsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
