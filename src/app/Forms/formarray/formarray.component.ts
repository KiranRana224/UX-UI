import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss'],
})
export class FormarrayComponent implements OnInit {
  formRegister!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formRegister = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      subject: new FormArray([new FormControl('')]), // Start with one subject input by default
    });
  }
  addInput() {
    const subjectArray = this.formRegister.get('subject') as FormArray;
    subjectArray.push(new FormControl(''));
  }
  get subjectControls() {
    return (this.formRegister.get('subject') as FormArray).controls;
  }
  removeInput(index: number) {
    const subjectArray = this.formRegister.get('subject') as FormArray;
    subjectArray.removeAt(index); // Remove FormControl at the given index
  }
}
