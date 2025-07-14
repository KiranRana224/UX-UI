import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchformComponent } from './searchform/searchform.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-parent',
  templateUrl: './dialog-parent.component.html',
  styleUrls: ['./dialog-parent.component.scss'],
})
export class DialogParentComponent {
  @ViewChild('triggerButton', { read: ElementRef }) triggerButton!: ElementRef;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const buttonRect = this.triggerButton.nativeElement.getBoundingClientRect();

    const dialogRef = this.dialog.open(SearchformComponent, {
      width: '300px',
      hasBackdrop: false,
      position: {
        top: `${buttonRect.top + window.scrollY}px`,
        left: `${buttonRect.right + 10 + window.scrollX}px`, // 10px right of button
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed', result);
    });
  }
}
