import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideIn', [
      state(
        'hidden',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('hidden => visible', [animate('500ms ease-in')]),
      transition('visible => hidden', [animate('500ms ease-out')]),
    ]),
  ],
})
export class AppComponent {
  state = 'hidden';

  toggleSlide() {
    this.state = this.state === 'hidden' ? 'visible' : 'hidden';
  }
}
