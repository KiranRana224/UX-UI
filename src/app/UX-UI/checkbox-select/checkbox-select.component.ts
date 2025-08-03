import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-select',
  templateUrl: './checkbox-select.component.html',
  styleUrls: ['./checkbox-select.component.scss'],
})
export class CheckboxSelectComponent {
  @Input() patchValues: string[] = [];
  @Output() selectionChanged = new EventEmitter<string[]>();

  selectedOptions = new FormControl<string[]>([]);
  searchText = '';

  options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
    { label: 'Grapes', value: 'grapes' },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patchValues'] && this.patchValues) {
      this.selectedOptions.patchValue(this.patchValues);
    }
  }

  shouldShowOption(option: { label: string }) {
    return option.label.toLowerCase().includes(this.searchText.toLowerCase());
  }

  onSelectionChange() {
    this.searchText = '';
    this.selectionChanged.emit(this.selectedOptions.value || []);
  }
}
