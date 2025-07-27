import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None, // This allows ::ng-deep to work
})
export class CheckboxComponent {
  users = [
    { id: 1, name: 'Work', color: '#e53935', checked: true },
    { id: 2, name: 'Personal', color: '#1e88e5', checked: false },
    { id: 3, name: 'Fitness', color: '#43a047', checked: true },
  ];
}
