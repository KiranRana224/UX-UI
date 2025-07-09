import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss'],
})
export class FormExampleComponent {
  form!: FormGroup;
  isDisabled: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [''],
      project: [''],
      budget: [''],
      basic: [''],
      taxAperc: [{ value: '', disabled: this.isDisabled }],
      taxBperc: [{ value: '', disabled: this.isDisabled }],
      taxCperc: [{ value: '', disabled: this.isDisabled }],
      taxArray: this.fb.array([this.formDate()]),
    });
  }
  formDate() {
    return this.fb.group({
      product: [''],
      unit: [''],
      basic: [''],
      aPerc: [''],
      bPerc: [''],
      cPerc: [''],
      aValue: [''],
      bValue: [''],
      cValue: [''],
      total: [{ value: '', disabled: true }],
    });
  }
  get taxArray(): FormArray {
    return this.form.get('taxArray') as FormArray;
  }
  selectChange(event: any) {
    if (event.value === 'No') {
      this.isDisabled = true;

      // Disable top-level controls
      this.form.get('taxAperc')?.disable();
      this.form.get('taxBperc')?.disable();
      this.form.get('taxCperc')?.disable();

      // Set top-level values to 0
      this.form.get('taxAperc')?.setValue(0);
      this.form.get('taxBperc')?.setValue(0);
      this.form.get('taxCperc')?.setValue(0);

      // Also patch FormArray rows with 0 and recalculate
      this.taxArray.controls.forEach((group, i) => {
        group.patchValue({
          aPerc: 0,
          bPerc: 0,
          cPerc: 0,
        });
        this.changeTax(i); // Update totals
      });
    } else {
      this.isDisabled = false;

      this.form.get('taxAperc')?.enable();
      this.form.get('taxBperc')?.enable();
      this.form.get('taxCperc')?.enable();

      this.changeTaxes();
    }
  }

  changeTaxes() {
    const taxACtrl = this.form.get('taxAperc')?.value || 0;
    const taxBCtrl = this.form.get('taxBperc')?.value || 0;
    const taxCCtrl = this.form.get('taxCperc')?.value || 0;

    const array = this.taxArray;

    for (let i = 0; i < array.length; i++) {
      const group = array.at(i) as FormGroup;

      group.patchValue({
        aPerc: taxACtrl,
        bPerc: taxBCtrl,
        cPerc: taxCCtrl,
      });

      this.changeTax(i);
    }
  }

  changeTax(i: number) {
    const group = this.taxArray.at(i);

    const basic = +group.get('basic')?.value || 0;
    const aPerc = +group.get('aPerc')?.value || 0;
    const bPerc = +group.get('bPerc')?.value || 0;
    const cPerc = +group.get('cPerc')?.value || 0;

    const aValue = (aPerc * basic) / 100;
    const bValue = (bPerc * basic) / 100;
    const cValue = (cPerc * basic) / 100;
    const total = basic + aValue + bValue + cValue;

    group.patchValue({
      aValue,
      bValue,
      cValue,
      total,
    });
  }

  addRow() {
    const newRow = this.formDate();
    this.taxArray.push(newRow);

    const index = this.taxArray.length - 1; // index of newly added row

    // Get current tax values from top-level controls
    const taxACtrl = this.form.get('taxAperc')?.value || 0;
    const taxBCtrl = this.form.get('taxBperc')?.value || 0;
    const taxCCtrl = this.form.get('taxCperc')?.value || 0;

    // Patch the new row
    newRow.patchValue({
      aPerc: taxACtrl,
      bPerc: taxBCtrl,
      cPerc: taxCCtrl,
    });

    this.changeTax(index); // Recalculate for new row
  }

  removeRow(index: number) {
    this.taxArray.removeAt(index);
  }

  calculateGrandTotal() {
    let total = 0;

    this.taxArray.controls.forEach((group) => {
      const rowTotal = +group.get('total')?.value || 0;
      total += rowTotal;
    });
    return total;
  }
}
