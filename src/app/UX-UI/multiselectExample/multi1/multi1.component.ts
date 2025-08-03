import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-multi1',
  templateUrl: './multi1.component.html',
  styleUrls: ['./multi1.component.scss'],
})
export class Multi1Component {
  length!: number;

  countryCtrl: FormControl;

  filteredCountry: Observable<any[]>;

  country_lis: any[] = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
  ];

  private jsonURL = '/src/app/countries.json';

  constructor() {
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map((country) =>
        country ? this.filtercountry(country) : this.country_lis.slice()
      )
    );
  }

  filtercountry(name: string) {
    let arr = this.country_lis.filter(
      (country) => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );

    return arr.length ? arr : [{ name: 'No Item found', code: 'null' }];
  }

  /**multi select search */
  @ViewChild('search') searchTextBox!: ElementRef;

  selectFormControl = new FormControl<string[]>([]);
  searchTextboxControl = new FormControl<string>('');
  selectedValues: string[] = [];

  data: string[] = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.searchTextboxControl.valueChanges.pipe(
      startWith(''),
      map((name) => this._filter(name))
    );
  }

  // private _filter(name: string | null): string[] {
  //   const filterValue = (name ?? '').toLowerCase();
  //   this.setSelectedValues();
  //   this.selectFormControl.patchValue(this.selectedValues);
  //   return this.data.filter((option) =>
  //     option.toLowerCase().startsWith(filterValue)
  //   );
  // }
  private _filter(searchText: string | null): string[] {
    const filterValue = (searchText ?? '').toLowerCase();
    const filtered = this.data.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );

    // 👇 Ensure selected values are always in the filtered list
    const selected = this.selectFormControl.value || [];

    selected.forEach((val) => {
      if (!filtered.includes(val)) {
        filtered.push(val); // Add back selected option if not in filtered
      }
    });

    return filtered;
  }

  selectionChange(event: any): void {
    if (event.isUserInput && !event.source.selected) {
      const index = this.selectedValues.indexOf(event.source.value);
      if (index !== -1) {
        this.selectedValues.splice(index, 1);
      }
    }
  }

  openedChange(opened: boolean): void {
    this.searchTextboxControl.patchValue('');
    if (opened) {
      setTimeout(() => this.searchTextBox?.nativeElement.focus());
    }
  }

  clearSearch(event: MouseEvent): void {
    event.stopPropagation();
    this.searchTextboxControl.patchValue('');
  }

  setSelectedValues(): void {
    const values = this.selectFormControl.value || [];
    values.forEach((e) => {
      if (!this.selectedValues.includes(e)) {
        this.selectedValues.push(e);
      }
    });
  }
}
