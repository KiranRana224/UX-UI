import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEventType,
} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fileuplod-download',
  templateUrl: './fileuplod-download.component.html',
  styleUrls: ['./fileuplod-download.component.scss'],
})
export class FileuplodDownloadComponent {
  selectedFile: File | null = null;
  fileName: any = ''; // For file download input
  progress = 0; // Store progress percentage
  uploadedFileName: any;

  constructor(private http: HttpClient) {}

  // Method to handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.progress = 0; // Reset progress when a new file is selected
  }

  // Method to upload the file
  onUpload(): void {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    // Create an HTTP request with the progress event
    const uploadReq = new HttpRequest(
      'POST',
      'http://localhost:3000/upload',
      formData,
      {
        headers: new HttpHeaders(),
        reportProgress: true,
      }
    );

    this.http.request(uploadReq).subscribe(
      (event: any) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {
              // Calculate the progress percentage
              this.progress = Math.round((100 * event.loaded) / event.total);
            }
            break;
          case HttpEventType.Response:
            // Handle successful upload response
            this.uploadedFileName = event.body.fileName; // Assuming backend sends the file name
            alert('File uploaded successfully');
            this.fileName = this.selectedFile?.name;
            this.resetProgress(); // Reset progress bar on failure
            break;
        }
      },
      (error) => {
        console.error('Upload failed', error);
        alert('File upload failed');
        this.resetProgress(); // Reset progress bar on failure
      }
    );

    // this.http.post('http://localhost:3000/upload', formData).subscribe(
    //   (response) => {
    //     console.log('File uploaded successfully', response);
    //     console.log();

    //     this.fileName = this.selectedFile?.name;
    //   },
    //   (error) => {
    //     console.error('File upload failed', error);
    //   }
    // );
  }
  // Reset progress bar
  resetProgress() {
    this.progress = 0;
  }

  // Method to download the file
  onDownload(): void {
    if (!this.fileName) {
      alert('Please enter a file name');
      return;
    }

    const fileUrl = `http://localhost:3000/download/${this.fileName}`;

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = this.fileName; // Set the file name
        link.click();
      },
      (error) => {
        console.error('Download failed', error);
      }
    );
  }
}
