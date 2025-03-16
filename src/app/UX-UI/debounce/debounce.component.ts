import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements OnInit {
  searchTerm: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.searchSubject
      .pipe(
        debounceTime(300), // Wait for 300ms after last input
        distinctUntilChanged() // Emit only if value changes
      )
      .subscribe((term) => {
        console.log('Debounced search term:', term);
        // Here you could call your API or perform any action
      });

    this.debounceSearch();
  }

  onSearch(event: string): void {
    this.searchSubject.next(event);
  }

  //-Debouncing with Angular's Reactive Forms
  searchControl: FormControl = new FormControl('');

  debounceSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms after the last change
        distinctUntilChanged(), // Only emit if the value is different from the previous one
        switchMap((searchTerm) => {
          // You can replace this with an actual service call, e.g., an HTTP request
          console.log('Searching for:', searchTerm);
          return of(searchTerm); // Return an observable
        })
      )
      .subscribe((result) => {
        // Handle the result (this could be updating your UI or making an API call)
        console.log('Debounced search result:', result);
      });
  }
}
