import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.scss'],
})
export class SelectAllComponent implements OnChanges, AfterViewInit {
  @ViewChild('select') select!: MatSelect;

  @Input() patchValues: string[] = [];

  allSelected = false;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  private viewInitialized = false;

  ngAfterViewInit() {
    this.viewInitialized = true;
    this.setSelectValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patchValues']) {
      this.setSelectValues();
    }
  }

  private setSelectValues() {
    if (!this.viewInitialized || !this.select || !this.patchValues) return;
    setTimeout(() => {
      this.select.options.forEach((option: MatOption) => {
        if (this.patchValues.includes(option.value)) {
          option.select();
        } else {
          option.deselect();
        }
      });

      this.select._onChange(this.patchValues);
      this.allSelected = this.patchValues.length === this.foods.length;
    });
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    this.select._onChange(this.getSelectedValues());
  }

  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  private getSelectedValues(): string[] {
    return this.select.options
      .filter((option: MatOption) => option.selected)
      .map((option: MatOption) => option.value);
  }
}
