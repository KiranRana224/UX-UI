import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  preselectedFruits = ['banana', 'grapes'];

  handleSelection(selected: string[]) {
    console.log('Selected fruits:', selected);
    // do something with selected data
  }
}
