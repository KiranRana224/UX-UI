import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Observable,
  catchError,
  of,
  debounceTime,
  startWith,
  switchMap,
} from 'rxjs';
import { SharedserviceService } from '../service/sharedservice.service';
interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
}
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {
  searchControl = new FormControl();
  allSuggestions: User[] = []; // Store all possible suggestions (user objects)
  filteredSuggestions$!: Observable<User[]>; // Correct type here

  constructor(private service: SharedserviceService) {}

  ngOnInit(): void {
    // Get all suggestions once when the component initializes
    this.service.filterSuggestionsFromServer().subscribe((res: User[]) => {
      console.log(res);
      this.allSuggestions = res; // Store the result in allSuggestions

      // Initially set filteredSuggestions$ to allSuggestions to show them in the dropdown
      this.filteredSuggestions$ = of(this.allSuggestions);
    });

    // Set up reactive form to filter suggestions on each input
    this.filteredSuggestions$ = this.searchControl.valueChanges.pipe(
      debounceTime(300), // Wait for 300ms after user stops typing
      startWith(''), // Start with an empty string, but it will still trigger with the initial value
      switchMap((query) => this.filterSuggestions(query))
    );
  }

  // Filter suggestions based on the input query
  filterSuggestions(query: string): Observable<User[]> {
    if (!query) {
      return of(this.allSuggestions); // Return all suggestions if query is empty
    }

    const filtered = this.allSuggestions.filter((user) => {
      // Convert each field to lowercase for case-insensitive comparison
      return (
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.mobile.includes(query) // Optional: You can also filter by mobile number
      );
    });
    return of(filtered); // Return the filtered suggestions as an observable
  }
}
