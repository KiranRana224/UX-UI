import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.scss'],
})
export class FormMultiselectComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fruits: [[]],
    });
  }

  onSelectChange(values: string[]) {
    this.form.get('fruits')?.setValue(values);
  }

  onSubmit() {
    console.log('Submitted:', this.form.value);
  }
}
