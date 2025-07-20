import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-select-multi-all',
  templateUrl: './select-multi-all.component.html',
  styleUrls: ['./select-multi-all.component.scss'],
})
export class SelectMultiAllComponent {
  @ViewChild('select') select!: MatSelect;
  @Input() patchValues = new FormControl();

  allSelected = false;
  viewInitialized = false;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngAfterViewInit() {
    this.viewInitialized = true;
    this.initSelect();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['patchValues'] && this.patchValues instanceof FormControl) {
      this.patchValues.valueChanges.subscribe((val) => {
        this.initSelect(val);
      });

      // Initial patch
      this.initSelect(this.patchValues.value);
    }
  }

  private initSelect(rawValues: any[] = []) {
    if (!this.viewInitialized || !this.select) return;

    const stringValues = rawValues.map((item: any) =>
      typeof item === 'string' ? item : item?.value
    );

    setTimeout(() => {
      this.select.options.forEach((option: MatOption) => {
        if (stringValues.includes(option.value)) {
          option.select();
        } else {
          option.deselect();
        }
      });

      this.select._onChange(stringValues);
      this.allSelected = stringValues.length === this.foods.length;
    });
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }

    const selectedValues = this.getSelectedValues();
    this.select._onChange(selectedValues);
    this.patchValues.setValue(selectedValues);
  }

  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;

    const selectedValues = this.getSelectedValues();
    this.patchValues.setValue(selectedValues);
  }

  private getSelectedValues(): string[] {
    return this.select.options
      .filter((option: MatOption) => option.selected)
      .map((option: MatOption) => option.value);
  }
}
